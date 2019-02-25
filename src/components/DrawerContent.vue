<template>
  <q-card
    class="no-border"
    flat
  >
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
              <q-item
                v-for="item in button.items"
                :key="item.id"
                class="item-no-padding q-ma-sm"
              >
                <q-item-side :icon="item.icon" />
                <q-item-main class="white-text">
                  <div style="width:204px;">
                    <div style="width:202px;display:inline;">
                      <div
                        class="white-text ellipsis"
                        style="width:202px;"
                      >{{item.value}}</div>
                    </div>
                  </div>
                </q-item-main>
              </q-item>
            </q-list>
          </q-btn>
        </div>
      </div>
      <div class="q-my-md">
        <div class="white-text">
          Distribution
        </div>
        <vue-chartist
          class="q-my-md"
          ratio="ct-major-second"
          type="Pie"
          :data="chartData"
          :options="chartOptions"
        >
          <!-- style="background:blueviolet; max-width:200px;" -->
        </vue-chartist>
      </div>
    </q-card-main>
  </q-card>
</template>

<script>
import VueChartist from "v-chartist";

export default {
  // name: 'ComponentName',
  components: {
    VueChartist
  },
  props: { title: String },
  data() {
    return {
      difficulty: undefined,
      chartData: {
        labels: ["A", "B", "C"],
        series: [
          { value: 3, className: "pie1" },
          { value: 3, className: "pie2" },
          { value: 3, className: "pie3" }
        ]
      },
      chartOptions: {
        lineSmooth: false
      },
      buttons: [
        {
          id: 1,
          title: "Difficulty",
          items: [
            {
              id: 0,
              icon: "compare_arrows",
              value: this.$store.state.explorer.difficulty
            }
          ]
        },
        {
          id: 2,
          title: "MERGE Coin Supply",
          items: [
            {
              id: 0,
              icon: "alarm",
              value: this.$store.state.explorer.moneySupply
            }
          ]
        },
        {
          id: 3,
          title: "Network Hashrate",
          items: [
            {
              id: 0,
              icon: "alarm",
              value: this.$store.state.explorer.hashRate / 10 ** 9
            }
          ]
        }
      ]
    };
  },
  mounted() {
    this.updateStat();
  },
  methods: {
    click() {
      console.log("I am clicked! ");
    },
    updateStat() {
      this.$http
        .getDifficulty()
        .then(result => {
          console.log("DIFFICULTY RESPONSE!"); // + JSON.stringify(result));
          this.$store.commit("explorer/setDifficulty", result.data);
        })
        .catch(err => {
          console.log(
            "ERROR getDifficulty when DrawerContent is mounted. Error is " +
              err.message
          );
        });
      this.$http
        .getMoneySupply()
        .then(result => {
          console.log("MONEY SUPPLY RESPONSE!"); // + JSON.stringify(result));
          this.$store.commit("explorer/setMoneySupply", result.data);
        })
        .catch(err => {
          console.log(
            "ERROR getMoneySupply when DrawerContent is mounted. Error is " +
              err.message
          );
        });
      this.$http
        .getHashRate()
        .then(result => {
          console.log("HASHRATE RESPONSE!"); // + JSON.stringify(result));
          this.$store.commit("explorer/setHashRate", result.data);
        })
        .catch(err => {
          console.log(
            "ERROR getHashRate when DrawerContent is mounted. Error is " +
              err.message
          );
        });
    }
  }
};
</script>

<style>
.q-card-container {
  padding-bottom: 0px;
}

.button-no-padding {
  padding: 0px;
}
.item-no-padding {
  padding: 0px;
}
.white-text {
  color: whitesmoke;
  font-size: 18px;
  font-weight: 400;
}
.q-item-side {
  min-width: 16px;
}
.q-item {
  font-size: smaller;
  min-height: 24px;
}

.pie1 {
  stroke: brown;
  color: brown;
  background: brown !important;
  stroke-width: 5px;
}
.pie2 {
  stroke: blueviolet;
  color: blueviolet;
  background: blueviolet !important;
  stroke-width: 5px;
}
.pie3 {
  stroke: darkgreen;
  background: darkgreen !important;
  stroke-width: 5px;
}
</style>
