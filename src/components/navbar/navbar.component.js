import NavbarListComponent from './navbar-list/navbar-list.component.vue'
import NavbarToolbarComponent from './navbar-toolbar/navbar-toolbar.component.vue'

export default {
  name: 'NavbarComponent',
  props: {
    source: String
  },
  components: {
    'app-navbar-toolbar': NavbarToolbarComponent,
    'app-navbar-list': NavbarListComponent
  },
  data: () => ({
    drawer: null,
  }),
  created () {
    this.$vuetify.theme.dark = true
  },
  methods: {
    onClikedDrawer($event) {
      this.drawer = $event;
    }
  }
}