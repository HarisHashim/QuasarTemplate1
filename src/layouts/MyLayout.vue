<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar color="primary" :glossy="$q.theme === 'mat'" :inverted="$q.theme === 'ios'">
        <q-btn flat dense round @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu">
          <q-icon name="menu"/>
        </q-btn>

        <q-toolbar-title>Template One
          <div slot="subtitle">Version {{ version }}</div>
          <!-- <div slot="subtitle">Version {{ $q.version }}</div> -->
        </q-toolbar-title>

        <q-btn
          flat
          round
          dense
          icon="menu"
          @click="rightDrawerOpen = !rightDrawerOpen"
          aria-label="Toggle menu on right side"
        />
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-blue-grey-5' : null"
      class="q-layout-drawer-bg"
    >
      <drawer-banner/>
      <drawer-profile/>

      <div class="left-drawer-bottom">
        <div class="left-drawer-bottom-top">
          <drawer-link class="row"/>
        </div>
        <div class="text-right q-pa-sm left-drawer-bottom-text">
          {{this.$conf.author}}
          <br>
          {{this.$conf.org}}
        </div>
      </div>
    </q-layout-drawer>

    <q-layout-drawer
      v-model="rightDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-light-blue-8' : null"
      side="right"
    >
      <DrawerContent title="Information"/>
    </q-layout-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

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

<style lang="stylus">
@import '~variables';

.left-drawer-bottom {
  height: calc(100vh - 256px - 10px);
}

.left-drawer-bottom-top {
  height: calc(100vh - 256px - 42px - 10px);
}

.left-drawer-bottom-text {
  font-size: 0.8rem;
  height: 42px;
}
</style>
