<template>
  <q-card
    class="q-ma-md"
    dark
    color=primary
    style="min-width: 280px; max-width: 900px;"
  >
    <q-card-title>TxID:
      <div
        class="ellipsis"
        style="width:230px;"
      > {{data.txid}}</div>
      <div
        slot="right"
        class="row items-center"
      >
        <q-icon name="account_balance_wallet" />
      </div>
    </q-card-title>
    <q-card-main>
      <q-list
        highlight
        no-border
      >
        <q-item>
          <q-item-main>Confirmations</q-item-main>
          <q-item-side right>{{data.confirmations}}</q-item-side>
        </q-item>
        <q-item>
          <q-item-main>Timestamp</q-item-main>
          <q-item-side right>{{data.time}}</q-item-side>
        </q-item>
        <q-item>
          <q-item-main>Block Hash</q-item-main>
          <q-item-side
            class="ellipsis"
            style="width:220px;"
            right
          >{{data.blockhash}}</q-item-side>
        </q-item>
        <!-- <q-item>
          <q-item-main>Balance</q-item-main>
          <q-item-side right>{{data.balance}}</q-item-side>
        </q-item> -->
        <!-- <q-item
          v-for="item in addresses"
          :key="item.id"
          :class="{'item-small': $q.screen.lt.sm, 'item-medium': $q.screen.lt.lg, 'item-large': $q.screen.gt.xs}"
        >
          <q-item-main>{{item.label}}</q-item-main>
          <q-item-side right>{{item.value}}</q-item-side>
        </q-item> -->
      </q-list>
    </q-card-main>
    <!-- <q-card-separator />
    <q-card-actions>
      <div class="col q-mx-sm">Balance MERGE</div>
      <div class="col-auto q-mr-md">{{data.balance}}</div>
    </q-card-actions> -->
  </q-card>
</template>

<style>
</style>

<script>
export default {
  // name: 'ComponentName',
  data() {
    return {
      data: {
        txid:
          "6cdfe35743d5d22dc9a808ca1a0eedd07155e4c8ec20f87bb87e486b64bf0adb",
        blockhash:
          "000000000ab14d8ec3a42315a8187c9d41b9a5687b1291ec7b0f52ac35fb279f",
        confirmations: 41765,
        time: 1547061507
      }
    };
  }
};
</script>
