<!-- <template src= "../template1/index/index.html"/> -->
<template src= "../template2/index/index.html"/>

<!-- <style src= "../template1/index/index.css"/> -->
<style src= "../template2/index/index.css"/>

<script>
export default {
  name: "PageIndex",
  data() {
    return {
      index: 0,
      slides: [
        { text: "Why Quasar?", img: "quasar-logo-full.png" },
        { text: "Message 1", img: "camera.png" },
        { text: "Message 2", img: "tea.png" },
        { text: "Message 3", img: "umbrella.png" },
        { text: "Message 4", img: "train.png" },
        { text: "Message 5", img: "spaghetti.png" },
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
