import TrackService from "@/services/track.service";

export default {
	name: "music-track",
	data(){
		return {
			show: false,
			track: {}
		}
	},
	created() {
    this.getTrack();
	},
	methods: {
		getTrack() {
			let trackId = this.$route.params.trackId;

			if (!trackId)
				return;

			TrackService.getById(trackId)
				.subscribe({
          next: this.setTrack,
          error: console.error          
				});
		},
		setTrack(data) {
      this.show = false;
      this.track = {};

			if (data && data.id) {
        this.track = data;
        this.show = true;
      }
		}
	},
	watch: {
    '$route.params.trackId': function (newId, oldId) {
				if (newId !== oldId)
					this.getTrack();
		}
	}
}
