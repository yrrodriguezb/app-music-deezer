import ControlSearchComponent from "@/components/controls/search/control-search.component.vue";
import DialogConfigApiComponent from "@/components/core/dialog-config-api/dialog-config-api.component.vue";
import serviceKeys from "@/utils/service.keys";
import EventBus from "@/utils/event-bus";


export default {
  name: 'NavbarToolbarComponent',
  components: {
    'app-control-search': ControlSearchComponent,
    'app-dialog-config-api': DialogConfigApiComponent
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
      show_dialog: true,
      suscriptor: undefined,
      closeOnContentClick: false,
      isThemeDark: this.$vuetify.theme.dark,
      value: false,
      items: [
        {
          id: 1,
          subheader: 'YEISON RODRIGUEZ',
          subitems: [
            { id: 11, icon: 'mdi-settings', switch: false, text: 'Datos API' },
            { id: 12, icon: 'mdi-power', switch: false, text: 'Cerrar Sesión' }
          ]
        },
        {
          id: 2,
          subheader: 'TEMA PÁGINA',
          subitems: [
            { id: 21, icon: undefined, switch: true, text: 'Tema Oscuro' }
          ]
        }    
      ]
    }
  },
  methods: {
    emitDrawerClick() {
      this.$emit('clikedDrawer', this.isDrawer);
    },
    onSearchItemSelected($event) {
      alert($event);
    },
    onClickListItem(id) {
      if (id == 11) {
        this.show_dialog = true;
      }
    },
    onErrorService($event) {
      this.show_dialog = $event;
    },
    onCloseDialog($event) {
      this.show_dialog = $event;
    },
    onMounted() {
      this.show_dialog = !serviceKeys.EXISTS_KEYS_API_DEEZER;
      EventBus.$on("errorService", this.onErrorService);
    }
  },
  mounted() {
    this.onMounted();
  }
}