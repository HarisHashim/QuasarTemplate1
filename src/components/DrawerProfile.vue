<template>
  <div class="row" style="width=300px; height:106px;">
    <div class="col-auto profile-bg" dark>
      <img
        class="q-mt-sm q-mx-lg row"
        alt="Quasar logo"
        src="~assets/profile.jpg"
        style="width=60px; height:60px;border-radius: 50%;"
      >
      <div class="q-my-sm text-center">Harry</div>
    </div>
    <div class="col profile-bg">
      <div class="col-auto">
        <q-btn
          v-for="button in buttons"
          :key="button.id"
          class="q-ma-sm"
          :icon="button.icon"
          color="primary"
          round
          size="12px"
        >
          <q-tooltip>{{button.caption}}</q-tooltip>
        </q-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data() {
    return {
      buttons: [
        {
          id: 1,
          caption: "Settings",
          icon: "build"
        },
        {
          id: 2,
          caption: "Logout",
          icon: "exit_to_app"
        },
        {
          id: 3,
          caption: "Assessment",
          icon: "assessment"
        },
        {
          id: 4,
          caption: "Bookmark",
          icon: "bookmark"
        },
        {
          id: 5,
          caption: "Task",
          icon: "check_circle"
        }
      ]
    };
  }
};
</script>

<style lang="stylus">
@import "~variables";

.profile-bg {
  background : $blue-grey-8;
}
</style>
