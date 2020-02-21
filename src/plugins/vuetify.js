import Vue from 'vue'
import Vuetify, {
  VAlert,
  VApp,
  VAppBar,
  VAppBarNavIcon,
  VAutocomplete,
  VBtn,
  VCard,
  VCardActions,
  VCardText,
  VCardTitle,
  VChip,
  VCol,
  VContainer,
  VContent,
  VDialog,
  VDivider,
  VFooter,
  VIcon,
  VImg,
  VList,
  VListGroup,
  VListItem,
  VListItemAction,
  VListItemAvatar,
  VListItemContent,
  VListItemGroup,
  VListItemIcon,
  VListItemSubtitle,
  VListItemTitle,
  VMenu,
  VNavigationDrawer,
  VRow,
  VSpacer,
  VSubheader,
  VSwitch,
  VTextField,
  VToolbar,
  VToolbarItems,
  VToolbarTitle
} from 'vuetify/lib'

const VuetifyComponents = {
  VAlert,
  VApp,
  VAppBar,
  VAppBarNavIcon,
  VAutocomplete,
  VBtn,
  VCard,
  VCardActions,
  VCardText,
  VCardTitle,
  VChip,
  VCol,
  VContainer,
  VContent,
  VDialog,
  VDivider,
  VFooter,
  VIcon,
  VImg,
  VList,
  VListGroup,
  VListItem,
  VListItemAction,
  VListItemAvatar,
  VListItemContent,
  VListItemGroup,
  VListItemIcon,
  VListItemSubtitle,
  VListItemTitle,
  VMenu,
  VNavigationDrawer,
  VRow,
  VSpacer,
  VSubheader,
  VSwitch,
  VTextField,
  VToolbar,
  VToolbarItems,
  VToolbarTitle
}

Vue.use(Vuetify, {
  components: VuetifyComponents
})

const opts = {
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: '#21CFF3',
        accent: '#FF4081',
        secondary: '#ffe18d',
        success: '#4CAF50',
        info: '#2196F3',
        warning: '#FB8C00',
        error: '#FF5252'
      },
      light: {
        primary: '#1976D2',
        accent: '#e91e63',
        secondary: '#30b1dc',
        success: '#4CAF50',
        info: '#2196F3',
        warning: '#FB8C00',
        error: '#FF5252'
      }
    }
  },
  icons: {
    iconfont: 'mdi'
  },
}

export default new Vuetify(opts)