<template>
  <q-card
    class="q-ma-md"
    dark
    color=primary
    style="min-width: 280px; max-width: 900px;"
  >
    <q-card-title>Block Hash:
      <div
        class="ellipsis"
        style="width:230px;"
      > {{data.hash}}</div>
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
          <q-item-main>Height</q-item-main>
          <q-item-side right>{{data.height}}</q-item-side>
        </q-item>
        <q-item>
          <q-item-main>Difficulty</q-item-main>
          <q-item-side right>{{data.difficulty}}</q-item-side>
        </q-item>
        <q-item>
          <q-item-main>Confirmations</q-item-main>
          <q-item-side right>{{data.confirmations}}</q-item-side>
        </q-item>
        <q-item>
          <q-item-main>Size</q-item-main>
          <q-item-side right>{{data.size}}</q-item-side>
        </q-item>
        <q-item>
          <q-item-main>Timestamp</q-item-main>
          <q-item-side right>{{data.time}}</q-item-side>
        </q-item>
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
        hash:
          "000000001ca2ef23f89d777edfa5fd140b882ad692891a20c20b6570097812cd",
        size: 430,
        height: 60153,
        difficulty: 15079.67220712,
        confirmations: 41765,
        time: 1547061507
      }
    };
  }
};
</script>
