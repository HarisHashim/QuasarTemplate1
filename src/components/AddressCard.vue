<template>
  <q-card
    class="q-ma-md"
    dark
    color=primary
    style="min-width: 280px; max-width: 900px;"
  >
    <q-card-title>Address:
      <div
        class="ellipsis"
        style="width:230px;"
      > {{data.address}}</div>
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
          <q-item-main>Sent</q-item-main>
          <q-item-side right>{{data.sent}}</q-item-side>
        </q-item>
        <q-item>
          <q-item-main>Received</q-item-main>
          <q-item-side right>{{data.received}}</q-item-side>
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
    <q-card-separator />
    <q-card-actions>
      <div class="col q-mx-sm">Balance MERGE</div>
      <div class="col-auto q-mr-md">{{data.balance}}</div>
    </q-card-actions>
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
        address: "MJybwenzqa3qyhNNnmEbyb99A4PHaSCgVt",
        sent: 0,
        received: 472.5939788,
        balance: "472.5939788"
      }
    };
  }
};
</script>
