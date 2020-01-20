import searchService from "@/services/search.service";

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
        next: result => this.items = result.data,
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
    onError(err) {
      alert(err);
    }
  },
  destroyed() {
    this.onDestroyed();
  }
}