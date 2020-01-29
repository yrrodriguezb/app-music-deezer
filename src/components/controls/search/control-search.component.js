import searchService from "@/services/search.service";
import EventBus from "@/utils/event-bus";

export default {
  name: 'ControlSearchComponent',
  props: {
    placeholder: {
      type: String,
      default: 'Buscar'
    },
    text: {
      type: String
    },
    value: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      suscription: null,
      model: null,
      isLoading: false,
      search: null,
      tab: null,
      items: []
    }
  },
  watch: {
    model: function (newValue) {
      this.$emit('searchItemSelected', newValue);
    },
    search (val) {
      if (!val || val.length == 0) return;
      // Items have already been requested
      if (this.isLoading) return;

      this.isLoading = true

      this.suscription = searchService.find(val).subscribe({
        next: this.onSuccess,
        error: this.onError,
        complete: () => this.isLoading = false
      })
    }
  },
  methods: {
    onDestroyed() {
      if (this.suscriptor)
        this.suscriptor.unsubscribe();
    },
    onError() {
      EventBus.$emit("errorService", true);
    },
    onSuccess(result) {
      if (!result.error)
        this.items = result.data;
      else if (result.status == 401)
        this.onError();
    }
  },
  destroyed() {
    this.onDestroyed();
  }
}