import TrackService from "@/services/track.service";

export default {
	name: "MusicTrackComponent",
	props: {
		song: {
			type: Object,
			default: null
		}
	},
	data(){
		return {
			show: false,
			track: {}
		}
	},
	created() {
    	this.onCreated();
	},
	methods: {
		getTrack(trackId) {
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
		},
		onCreated() {
			let trackId = this.$route.params.trackId;

			if (!trackId) {
				this.track = this.song || {};
				this.show = this.song ? true : false;
				return;
			}

			this.getTrack(trackId);
		}
	},
	watch: {
    '$route.params.trackId': function (newId, oldId) {
				if (newId !== oldId)
					this.getTrack();
		}
	}
}
