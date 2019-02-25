<template>
  <q-page class="flex flex-center">
    <q-card
      class="q-ma-md"
      dark
      color=primary
      style="min-width: 280px; max-width: 900px;"
    >
      <q-card-title>Tracked Addresses
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
          <q-item
            v-for="item in addresses"
            :key="item.id"
            :class="{'item-small': $q.screen.lt.sm, 'item-medium': $q.screen.gt.xs && $q.screen.lt.md , 'item-large': $q.screen.gt.md}"
          >
            <q-item-main>{{item.label}}</q-item-main>
            <q-item-side right>{{item.value}}</q-item-side>
          </q-item>
        </q-list>
      </q-card-main>
      <q-card-separator />
      <q-card-actions>
        <div class="col q-mx-sm">Total MERGE</div>
        <!-- <div class="col-auto"></div> -->
        <div class="col-auto q-mr-md">123.45</div>
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<style>
.item-small {
  width: 280px;
}

.item-medium {
  width: 500px;
}

.item-large {
  width: 600px;
}
</style>

<script>
export default {
  name: "PageIndex",
  data() {
    return {
      addresses: [
        { id: 1, label: "Address1", address: "AaBbCcDdEe", value: 123.45 },
        { id: 2, label: "Address2", address: "AaBbCcDdEe", value: 123.45 },
        { id: 3, label: "Address3", address: "AaBbCcDdEe", value: 123.45 }
      ]
    };
  }
};
</script>
