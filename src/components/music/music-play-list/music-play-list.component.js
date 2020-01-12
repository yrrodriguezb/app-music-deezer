import MusicPlayListItemComponent from "./music-play-list-item/music-play-list-item.component.vue";

export default {
  name: 'MusicPlayListComponent',
  components: {
    'app-music-play-list-item': MusicPlayListItemComponent
  },
  data() {
    return {
      playlist: [
        { id: 11, title: 'play list 1' },
        { id: 12, title: 'play list 2' },
        { id: 13, title: 'play list 3' },
        { id: 14, title: 'play list 4' }
      ]
    }
  }
}