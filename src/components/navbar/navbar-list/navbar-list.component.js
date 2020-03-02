import NavbarListItemComponent from '../navbar-list-item/navbar-list-item.component.vue';
import MusicPlayListComponent from "@/components/music/music-play-list/music-play-list.component.vue";

export default {
  name: 'NavbarListComponent',
  components: {
    'app-navbar-list-item': NavbarListItemComponent,
    'app-music-play-list': MusicPlayListComponent
  },
  data () {
    return {
      items: [
        { icon: 'mdi-home', title: 'Inicio', href: { name: 'home' } },
        { icon: 'mdi-music-circle-outline', title: 'Canciones', href:"#" },
        { icon: 'mdi-library-video', title: 'Álbumnes', href:"#" },
        { icon: 'mdi-artist', title: 'Artistas', href:"#" },
        { icon: 'mdi-bookmark-music', title: 'Archivos locales', href:"#" }
      ]
    } 
  }
}