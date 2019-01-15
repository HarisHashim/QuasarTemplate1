<template>
  <q-list class="white-text" no-border link inset-delimiter>
    <q-list-header>Essential Links</q-list-header>
    <q-item @click.native="openURL('http://quasar-framework.org')">
      <q-item-side icon="school"/>
      <q-item-main label="Docs" sublabel="quasar-framework.org"/>
    </q-item>
    <q-item @click.native="openURL('https://github.com/quasarframework/')">
      <q-item-side icon="code"/>
      <q-item-main label="GitHub" sublabel="github.com/quasarframework"/>
    </q-item>
    <q-item @click.native="openURL('https://discord.gg/5TDhbDg')">
      <q-item-side icon="chat"/>
      <q-item-main label="Discord Chat Channel" sublabel="https://discord.gg/5TDhbDg"/>
    </q-item>
  </q-list>
</template>

<script>
export default {
  // name: 'ComponentName',
  data() {
    return {};
  }
};
</script>

<style lang="stylus">
@import "~variables";

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
