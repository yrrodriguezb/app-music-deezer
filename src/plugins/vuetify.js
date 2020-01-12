import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

const opts = {
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: '#077992',
        accent: '#CD1352',
        secondary: '#D6CAAA',
        success: '#4AB94F',
        info: '#2075B9',
        warning: '#FB8C00',
        error: '#CB2020'
      },
      light: {
        primary: '#1976D2',
        accent: '#DB2562',
        secondary: '#107DA1',
        success: '#52C63B',
        info: '#1D89DE',
        warning: '#FB8C00',
        error: '#DE2626'
      }
    }
  },
  icons: {
    iconfont: 'mdi'
  }
}

export default new Vuetify(opts)