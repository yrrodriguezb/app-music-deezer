import serviceKeys from "@/utils/service.keys";

export default {
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      show_dialog: this.show,
      show_btn_cancel: serviceKeys.EXISTS_KEYS_API_DEEZER,
      key: '',
      host: ''
    }
  },
  computed: {
    dialog: {
      get: function () {
        this.show_dialog = this.show;
        return this.show_dialog;
      },
      set: function (val) {
        this.show_dialog = val;
      }
    }
  },
  methods: {
    close() {
      this.show_dialog = false;
      this.dialog = this.show_dialog;
      this.$emit("closeDialog", this.show_dialog);
    },
    save() {
      if (this.host && this.key) {
        serviceKeys.saveKeys(this.host, this.key);
        this.show_btn_cancel = true;
        this.close();
        location.reload();
      } else {
        this.show_btn_cancel = false;
      }
    },
    onCreated() {
      serviceKeys.getKeys();
      this.key = serviceKeys.KEY;
      this.host = serviceKeys.HOST;
      this.show_btn_cancel = serviceKeys.EXISTS_KEYS_API_DEEZER;
    }
  },
  created() {
    this.onCreated();
  }
}