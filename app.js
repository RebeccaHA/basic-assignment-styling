const app = Vue.createApp({
  data() {
    return {
      selectedBoxA: false,
      selectedBoxB: false,
      selectedBoxC: false
    };
  },
  methods: {
    isSelected(box) {
      if (box === "A") {
        this.selectedBoxA = !this.selectedBoxA;
      } else if (box === "B") {
        this.selectedBoxB = true;
      } else if (box === "C") {
        this.selectedBoxC = true;
      }
    }
  }
});

app.mount("#styling");
