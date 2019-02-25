<template>
  <q-card
    dark
    class="q-pa-sm bg-primary"
    style="opacity:0.7;"
  >
    <q-card-main>
      <q-table
        dark
        :data="data"
        separator="horizontal"
        :columns="columns"
        row-key="blockindex"
        rowsNumber:10
      >
        <q-tr
          slot="header"
          slot-scope="props"
        >
          <q-th
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
          >
            {{ col.label }}
          </q-th>
        </q-tr>
        <template
          slot="body"
          slot-scope="props"
        >
          <q-tr
            :props="props"
            @click.native="rowClicked(props.row)"
          >
            <!-- <q-td
              v-for="object in Object.keys(props.row)"
              :key="object"
              :props="props"
            >
              {{props.row[object]}}
            </q-td> -->
            <q-td
              key="blockindex"
              :props="props"
            >{{ props.row.blockindex}}</q-td>

            <q-td
              v-if="$q.screen.lt.sm"
              style="width:10px;"
              key="blockhash"
              :props="props"
            >{{ props.row.blockhash.substr(0,8) + " ..." }}
              <q-tooltip>{{props.row.blockhash}}</q-tooltip>
            </q-td>
            <q-td
              v-else-if="$q.screen.lt.lg"
              style="width:10px;"
              key="blockhash"
              :props="props"
            >{{ props.row.blockhash.substr(0,17) + " ..." }}
              <q-tooltip>{{props.row.blockhash}}</q-tooltip>
            </q-td>
            <q-td
              v-else
              style="width:10px;"
              key="blockhash"
              :props="props"
            >{{ props.row.blockhash }}</q-td>

            <q-td
              key="amount"
              :props="props"
            >{{calcAmount(props.row.vout)}}</q-td>
            <q-td
              key="timestamp"
              :props="props"
            >{{ timestampToDate(props.row.timestamp) }}</q-td>
          </q-tr>
          <q-tr
            v-show="props.expand"
            :props="props"
          >
            <q-td colspan="100%">
              <div class="text-left">This is expand slot for row above: {{ props.row.name }}.</div>
            </q-td>
          </q-tr>
        </template>
      </q-table>
      <template
        slot="top-left"
        slot-scope="props"
      >
        <q-search
          hide-underline
          color="secondary"
          v-model="filter"
          class="col-6"
        />
      </template>
    </q-card-main>
    <q-card-separator />
    <q-card-main class="q-ma-sm">

    </q-card-main>
  </q-card>
</template>

<script>
export default {
  // name: 'ComponentName',
  props: {
    data: Array,
    columns: Array
  },
  data() {
    return {};
  },
  methods: {
    rowClicked(selectedRow) {
      console.log("ROW DATA: " + selectedRow);
      this.$emit("selected", selectedRow);
    },
    calcAmount(items) {
      console.log(JSON.stringify(items));
      let total = 0;
      for (let item of items) {
        total += item.amount;
      }
      return (Math.round((total / 100000000) * 100) / 100).toFixed(2);
    },
    timestampToDate(timestamp) {
      let date = new Date(0);
      date.setUTCSeconds(timestamp);
      return date.toLocaleString();
    }
  }
};
</script>

<style>
</style>
