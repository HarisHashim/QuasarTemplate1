<template src= "../template1/index/index.html"></template>
<!-- <template src= "../template2/index/index.html"></template>-->

<style src= "../template1/index/index.css"></style>
<!--<style src= "../template2/index/index.css"></style> -->

<script>
export default {
  name: "PageIndex",
  data() {
    return {
      index: 0,
      slides: [
        { text: "Why Quasar?", img: "quasar-logo-full.png" },
        { text: "All Platforms in One Go", img: "spaghetti.png" },
        { text: "Best practices integrated by default", img: "camera.png" },
        { text: "Two Themes - Material theme and iOS theme", img: "train.png" },
        { text: "Great documentation", img: "tea.png" },
        { text: "And saving the best for last, awesome ever-growing community", img: "umbrella.png" },
        { text: "Stay tuned ...", img: "version.png" }
      ]
    };
  },
  methods: {
    nextIndex() {
      if (this.index === 6) {
        this.index = 0;
      } else {
        this.index++;
      }
    }
  },
  computed: {
    imageSrc() {
      return "../statics/" + this.slides[this.index].img;
    },
    caption() {
      return this.slides[this.index].text;
    }
  }
};
</script>
