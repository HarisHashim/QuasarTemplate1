<template>
  <div>
    <q-list
      class="white-text"
      no-border
      link
      inset-delimiter
    >
      <!-- <q-list-header>Menu</q-list-header> -->
      <div class="q-px-sm q-pt-sm">Menu</div>
      <q-item @click.native="$router.push('/'); $emit('closeDrawer','Home')">
        <q-item-side icon="home" />
        <q-item-main label="Home" />
      </q-item>
      <q-item @click.native="doSearchLatest">
        <q-item-side icon="search" />
        <q-item-main label="Latest Transaction" />
      </q-item>
    </q-list>

    <q-list
      class="white-text"
      no-border
      link
      inset-delimiter
    >
      <!-- <q-list-header>Essential Links</q-list-header> -->
      <div class="q-px-sm q-pt-sm">Essential Links</div>
      <q-item @click.native="openURL('https://projectmerge.org/'); $emit('closeDrawer')">
        <q-item-side icon="school" />
        <q-item-main
          label="Project Merge"
          sublabel="projectmerge.org"
        />
      </q-item>
      <!-- <q-item @click.native="openURL('https://kb.projectmerge.org/'); $emit('closeDrawer')">
        <q-item-side icon="code" />
        <q-item-main
          label="Project Merge Knowledge Base"
          sublabel="kb.projectmerge.org"
        />
      </q-item> -->
      <q-item @click.native="openURL('https://discord.gg/3RxnY4F'); $emit('closeDrawer')">
        <q-item-side icon="chat" />
        <q-item-main
          label="Merge Community Discord"
          sublabel="discord.gg/3RxnY4F"
        />
      </q-item>
    </q-list>
  </div>
</template>

<script>
import { openURL } from "quasar";
import CONST from "@/util/const";

export default {
  // name: 'ComponentName',
  data() {
    return {};
  },
  methods: {
    openURL,
    doSearchLatest() {
      this.$root.$emit("onGlobalSearch", CONST.latest);
      this.$router.push("/result");
      this.$emit("closeDrawer", "Latest Transaction");
    }
  }
};
</script>

<style lang="stylus">
@import '~variables';

.q-item-sublabel {
  color: $blue-grey-2;
}

.q-list-header {
  color: whitesmoke;
}

.q-item-side {
  color: whitesmoke;
}
</style>
