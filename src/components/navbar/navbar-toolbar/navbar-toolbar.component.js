import ControlSearchComponent from "@/components/controls/search/control-search.component.vue";

export default {
  name: 'NavbarToolbarComponent',
  components: {
    'app-control-search': ControlSearchComponent
  },
  props: {
    drawer: {
      type: Boolean,
      default: false
    }, 
    title: {
      type: String,
      default: 'Application'
    }
  },
  computed: {
    isDrawer() {
      return !this.drawer;
    },
    switchLabel() {
      return this.$vuetify.theme.dark ? 
            "Tema Oscuro" : 
            "Tema Claro ";
    }
  },
  data() {
    return {
      suscriptor: undefined,
      closeOnContentClick: false,
      isThemeDark: this.$vuetify.theme.dark,
      value: false,
    }
  },
  methods: {
    emitDrawerClick() {
      this.$emit('clikedDrawer', this.isDrawer);
    },
    onSearchItemSelected($event) {
      alert($event);
    }
  }
}