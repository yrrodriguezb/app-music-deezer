<template>
   <div>
    <div v-if="show_last_track">
      <p class="subtitle-2 font-weight-light text-uppercase">ULTIMA CANCIÓN SELECCIONADA</p>
      <v-divider class="pa-md-4 mx-lg-auto"></v-divider>
      <app-music-track  :song="track"></app-music-track>
    </div>

    <div v-if="tracks.length">
      <p class="subtitle-2 font-weight-light text-uppercase">ULTIMAS REPRODUCCIONES</p>
      <v-divider class="pa-md-4 mx-lg-auto"></v-divider>
      
      <v-simple-table >
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">#</th>
              <th class="text-left">Play</th>
              <th class="text-left">Cancion</th>
              <th class="text-left">Artista</th>
              <th class="text-left">Duración</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(track, index) in tracks" :key="track.id">
              <td class="font-weight-bold">{{ index + 1 }}</td>
              <td>
                <v-btn text icon>
                  <v-icon>mdi-play</v-icon>
                </v-btn>
              </td>
              <td>{{ track.title_short }}</td>
              <td>{{ track.artist.name }}</td>
              <td>{{ track.duration | secondsToTime }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
  </div>
</template>

<script>
import MusicTrackComponent from "@/components/music/track/track.component.vue";
import albumService from "@/services/album.service";
import secondsToTime from "@/pipes/secondsToTime.pipe";

export default {
  name: 'home',
  components: {
    'app-music-track': MusicTrackComponent 
  },
  data() {
    return {
      track: null,
      show_last_track: false,
      tracks: []
    }
  },
  created() {
    this.onCreated();
  },
  filters: {
    secondsToTime
  },
  methods: {
    getLastTrackSearched() {
      var track = localStorage.getItem("LAST_TRACK_SEARCHED");

      if (track) {
        this.track = JSON.parse(track);
        this.show_last_track = true;
      }
    },
    getTracksByAlbum() {
      albumService.getTracksByAlbum().subscribe({
        next: this.onSuccess
      })
    },
    onSuccess(result) {
      if (!result.error)
        this.tracks = result.data;
    },
    onCreated() {
      this.getLastTrackSearched();
      this.getTracksByAlbum();
    }
  }
}
</script>
