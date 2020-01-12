export default {
  name: 'NavbarToolbarComponent',
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
    }
  },
  methods: {
    emitDrawerClick() {
      this.$emit('clikedDrawer', this.isDrawer);
    }
  },
}