import secondsToTime from "@/pipes/secondsToTime.pipe";

export default {
  name: 'RenderLessAudioPlayerComponent',
  props: {
		id: {
			type: String,
			default: 'audio_player'
		},
    src: {
      type: String,
      required: true
    },
    autoplay: {
      type: Boolean,
      default: false
    },
    height: {
      type: Number,
      default: 2
    }
  },
  data() {
    return {
      playing: false,
      progress: 0,
      time_player: 0,
      time_end: 0,
      audio: null
    }
  },
  filters: {
    secondsToTime
  },
  methods: {
    __init__() {
			this.audio = this.$refs.audio_player;

			if (!this.audio)
				this.audio = this.$el.querySelector(`#${this.id}`);

      this.time_end = this.audio.duration * 100;

      this.refEvents();
    },
    play() {
      this.playing = true;
      this.audio.play();
    },
    pause() {
      this.playing = false;
      this.audio.pause();
    },
    reload() {
      this.playing = false;
      this.progress = 0;
      this.audio.load();
    },
    refEvents() {
      var self = this;

      this.audio.ontimeupdate = function() {
        self.progress = self.audio.currentTime / self.audio.duration * 100;
        self.time_player = self.audio.currentTime;
      }

      this.audio.onloadeddata = function() {
        self.time_end = self.audio.duration;
      }
    }
  },
  mounted() {
    this.__init__();
  },
  render() {
    return this.$scopedSlots.default({
			playing: this.playing,
			autoplay: this.autoplay,
			time_player: this.time_player,
			play: this.play,
			pause: this.pause,
			reload: this.reload,
    });
  }
}