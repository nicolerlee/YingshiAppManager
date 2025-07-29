import {reactive} from "vue";

const pay6 = reactive({
  config: {
    items: [],
  },
  data: {
    sel: 0,
  },
  reset() {
    this.data.sel = 0;
  }
});

export default pay6;