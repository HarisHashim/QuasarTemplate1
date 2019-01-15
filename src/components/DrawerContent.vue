<template>
  <q-card class="no-border" flat>
    <q-card-title class="white-text">{{title}}</q-card-title>
    <q-card-main>
      <div>
        <div class="col">
          <q-btn
            v-for="button in buttons"
            :key="button.id"
            class="button-no-padding q-ma-sm"
            @click="click"
          >
            <q-list>
              <div class="q-mx-sm white-text text-left">{{button.title}}</div>
              <q-item v-for="item in button.items" :key="item.id" class="item-no-padding q-mx-sm">
                <q-item-side :icon="item.icon"/>
                <q-item-main class="white-text">
                  <div class style="width:72px;">
                    <div style="width:70px;display:inline;">
                      <div class="white-text ellipsis" style="width:70px;">{{item.value}}</div>
                    </div>
                  </div>
                </q-item-main>
              </q-item>
            </q-list>
          </q-btn>
        </div>
      </div>
    </q-card-main>
  </q-card>
</template>

<script>
export default {
  // name: 'ComponentName',
  props: { title: String },
  data() {
    return {
      buttons: [
        {
          id: 1,
          title: "Who?",
          items: [
            { id: 0, icon: "alarm", value: "John Doe" },
            { id: 1, icon: "build", value: "Marry Jane" }
          ]
        },
        {
          id: 2,
          title: "What?",
          items: [
            { id: 0, icon: "alarm", value: "John Doe" },
            { id: 1, icon: "build", value: "Marry Jane" }
          ]
        },
        {
          id: 3,
          title: "When?",
          items: [
            { id: 0, icon: "alarm", value: "John Doe" },
            { id: 1, icon: "build", value: "Marry Jane" }
          ]
        }
      ]
    };
  },
  methods: {
    click() {
      console.log("I am clicked! ");
    }
  }
};
</script>

<style>
.button-no-padding {
  padding: 0px;
}
.item-no-padding {
  padding: 0px;
}
.white-text {
  color: whitesmoke;
}
.q-item-side {
  min-width: 16px;
}
.q-item {
  font-size: smaller;
  min-height: 24px;
}
</style>
