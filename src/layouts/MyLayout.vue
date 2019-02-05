<!-- <template src="../template1/layout/MyLayout.html"></template> -->
<template src="../template2/layout/MyLayout.html"></template>

<!-- <style  src= "../template1/layout/MyLayout.css"> </style> -->
 <style  src= "../template2/layout/MyLayout.css"></style>

<script>
import { openURL } from "quasar";
import DrawerContent from "components/DrawerContent";
import DrawerBanner from "components/DrawerBanner";
import DrawerProfile from "components/DrawerProfile";
import DrawerLink from "components/DrawerLink";

export default {
  name: "MyLayout",
  components: {
    DrawerContent,
    DrawerBanner,
    DrawerProfile,
    DrawerLink
  },
  data() {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      rightDrawerOpen: false,
      version: this.$conf.version
    };
  },
  methods: {
    openURL
  }
};
</script>
