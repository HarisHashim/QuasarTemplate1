<template>
  <q-layout
    view="lHh Lpr lFf"
    style="background: url('statics/bg-gradient.png');  background-position: center;"
  >
    <q-layout-header>
      <q-toolbar
        color="primary"
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title class="row gt-xs">
          <span class="col">{{ $conf.appName }}
            <div slot="subtitle">{{subTitle}}</div></span>
          <q-search
            class="q-px-sm col"
            autofocus
            v-model="searchModel"
            :error="searchError"
            v-if="isSearchClicked"
            :debounce="600"
            no-icon
            dark
          >
            <q-tooltip
              v-if="$q.screen.gt.xs"
              v-model="showingTooltip"
            >{{tooltipMessage}}</q-tooltip>
          </q-search>
        </q-toolbar-title>

        <q-toolbar-title class="lt-sm">
          <span
            v-if="!isSearchClicked"
            class=""
          >{{ $conf.appName }}
            <div slot="subtitle">{{subTitle}}</div></span>
          <q-search
            class="q-px-sm"
            autofocus
            v-model="searchModel"
            :error="searchError"
            v-if="isSearchClicked"
            :debounce="600"
            no-icon
            dark
          >
            <!--  -->
            <q-tooltip
              v-if="$q.screen.lt.sm"
              self="bottom middle"
              v-model="showingTooltip"
            >{{tooltipMessage}}</q-tooltip>
          </q-search>
        </q-toolbar-title>

        <q-btn
          flat
          round
          dense
          icon="search"
          @click="onSearchClicked"
          aria-label="search"
        />
        <q-btn
          flat
          round
          dense
          icon="menu"
          @click="rightDrawerOpen = !rightDrawerOpen"
          aria-label="Toggle menu on right side"
        />
      </q-toolbar>
      <!-- <q-toolbar
        color="light-blue-8"
        text-color="black"
        icon=""
      >
        <q-collapsible
          icon="explore"
          label="Information"
          style="width: 100%;"
        >
          <drawer-content title="" />
        </q-collapsible>
      </q-toolbar> -->
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-blue-grey-5' : null"
      class="q-layout-drawer-bg"
    >
      <drawer-banner />
      <drawer-profile />

      <div class="left-drawer-bottom">
        <div class="left-drawer-bottom-top">
          <drawer-link
            class="row"
            @closeDrawer="closeDrawer"
          />
        </div>
        <div class="text-right q-pa-sm left-drawer-bottom-text">
          {{$conf.author}}
          <br>
          Version: {{$conf.version}}
        </div>
      </div>
    </q-layout-drawer>

    <q-layout-drawer
      v-model="rightDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-light-blue-8' : null"
      side="right"
    >
      <DrawerContent title="Statistic" />
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import DrawerContent from "components/DrawerContent";
import DrawerBanner from "components/DrawerBanner";
import DrawerProfile from "components/DrawerProfile";
import DrawerLink from "components/DrawerLink";

import CONST from "@/util/const";

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
      subTitle: "Home",
      leftDrawerOpen: this.$q.platform.is.desktop,
      rightDrawerOpen: false,
      isSearchClicked: false,
      searchModel: undefined,
      searchError: false,
      showingTooltip: false,
      tooltipMessage: "Enter block height, block hash, tx hash or address"
    };
  },
  created() {},
  mounted() {
    this.$q.screen.setSizes({ xs: 576, sm: 768, md: 1024, lg: 1200, xl: 2000 });
    // this.$http
    //   .getDifficulty()
    //   .then(result => {
    //     console.log("DIFFICULTY: " + JSON.stringify(result));
    //   })
    //   .catch(err => {
    //     console.log(
    //       "ERROR getDifficulty when layout is mounted. Error is " + err.message
    //     );
    //   });
    // this.$http
    //   .getMoneySupply()
    //   .then(result => {
    //     console.log("MONEY: " + JSON.stringify(result));
    //   })
    //   .catch(err => {
    //     console.log(
    //       "ERROR getMoneySupply when layout is mounted. Error is " + err.message
    //     );
    //   });
    // this.$http
    //   .getHashRate()
    //   .then(result => {
    //     console.log("HASHRATE: " + JSON.stringify(result));
    //   })
    //   .catch(err => {
    //     console.log(
    //       "ERROR getHashRate when layout is mounted. Error is " + err.message
    //     );
    //   });
    // this.$http
    //   .getLastTxs()
    //   .then(result => {
    //     console.log("LASTTXS: " + JSON.stringify(result));
    //   })
    //   .catch(err => {
    //     console.log(
    //       "ERROR getLastTxs when layout is mounted. Error is " + err.message
    //     );
    //   });
  },
  methods: {
    closeDrawer(subtitle) {
      this.leftDrawerOpen = false;
      if (subtitle !== null && subtitle !== undefined) {
        this.subTitle = subtitle;
      }
    },
    onSearchClicked() {
      this.searchError = false;
      if (!this.isSearchClicked) {
        this.showingTooltip = true;
      }

      if (this.searchModel !== undefined && this.searchModel !== "") {
        console.log("SEARCHING... ");
        this.doSearch();
      } else {
        this.isSearchClicked = !this.isSearchClicked;
      }
    },
    doSearch() {
      // console.log(
      //   "SEARCHING count: " +
      //     this.searchModel.length +
      //     " AD count: " +
      //     CONST.addressCount +
      //     " HS count: " +
      //     CONST.hashCount +
      //     " " +
      //     (this.searchModel.length === CONST.hashCount)
      // );

      if (
        this.searchModel.length === CONST.addressCount ||
        this.searchModel.length === CONST.hashCount
      ) {
        console.log("TO SEARCH RESULT ... ");
        this.$root.$emit("onGlobalSearch", this.searchModel);
        // this.$router.push("/result");
      } else {
        console.log("SEARCH PARAM ERROR ... ");
        this.searchError = true;
      }
    }
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
