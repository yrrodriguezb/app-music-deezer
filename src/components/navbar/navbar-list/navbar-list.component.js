import NavbarListItemComponent from '../navbar-list-item/navbar-list-item.component.vue';
import MusicPlayListComponent from "@/components/music/music-play-list/music-play-list.component.vue";

export default {
  name: 'NavbarListComponent',
  components: {
    'app-navbar-list-item': NavbarListItemComponent,
    'app-music-play-list': MusicPlayListComponent
  },
  data () {
    return {
      items: [
        { icon: 'music-circle-outline', title: 'Canciones' },
        { icon: 'library-video', title: 'Álbumnes' },
        { icon: 'artist', title: 'Artistas' },
        { icon: 'bookmark-music', title: 'Archivos locales' }
      ]
    } 
  }
}