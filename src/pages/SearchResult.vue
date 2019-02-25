<template>
  <q-page padding>
    <q-card
      dark
      style="height:100%"
    >
      <q-card-title dark>
        <!-- <big>{{searchParam}}</big> -->
      </q-card-title>
      <q-card-main>
        <search-table
          v-if="isShowTable"
          @selected="tableSelected"
          :data="tableData"
          :columns="tableColumns"
        ></search-table>
        <address-card v-if="isShowAddress"></address-card>
        <block-card v-if="isShowBlock"></block-card>
        <tx-card v-if="isShowTx"></tx-card>
      </q-card-main>
    </q-card>
  </q-page>
</template>

<style>
</style>

<script>
import CONST from "@/util/const";
import SearchTable from "components/SearchTable";
import AddressCard from "components/AddressCard";
import BlockCard from "components/BlockCard";
import TxCard from "components/TxCard";

export default {
  // name: 'PageName',
  components: { SearchTable, AddressCard, BlockCard, TxCard },
  data() {
    return {
      isShowTable: false,
      isShowAddress: false,
      isShowTx: false,
      isShowBlock: false,
      searchParam: undefined,
      tableData: undefined,
      // [
      //   {
      //     blockindex: "1231",
      //     blockhash: "AaBbCcDdAaBbCcDdAaBbCcDdAaBbCcDdAaBbCcDd",
      //     amount: "10.00",
      //     timestamp: "Sun, 10 Feb 2019 06:05:37 GMT"
      //   },
      //   {
      //     blockindex: "1232",
      //     blockhash: "AaBbCcDdAaBbCcDdAaBbCcDdAaBbCcDdAaBbCcDd",
      //     amount: "10.00",
      //     timestamp: "Sun, 10 Feb 2019 06:05:37 GMT"
      //   },
      //   {
      //     blockindex: "1233",
      //     blockhash: "AaBbCcDdAaBbCcDdAaBbCcDdAaBbCcDdAaBbCcDd",
      //     amount: "10.00",
      //     timestamp: "Sun, 10 Feb 2019 06:05:37 GMT"
      //   },
      //   {
      //     blockindex: "1234",
      //     blockhash: "AaBbCcDdAaBbCcDdAaBbCcDdAaBbCcDdAaBbCcDd",
      //     amount: "10.00",
      //     timestamp: "Sun, 10 Feb 2019 06:05:37 GMT"
      //   },
      //   {
      //     blockindex: "1235",
      //     blockhash: "AaBbCcDdAaBbCcDdAaBbCcDdAaBbCcDdAaBbCcDd",
      //     amount: "10.00",
      //     timestamp: "Sun, 10 Feb 2019 06:05:37 GMT"
      //   },
      //   {
      //     blockindex: "1236",
      //     blockhash: "AaBbCcDdAaBbCcDdAaBbCcDdAaBbCcDdAaBbCcDd",
      //     amount: "10.00",
      //     timestamp: "Sun, 10 Feb 2019 06:05:37 GMT"
      //   }
      // ],
      tableColumns: [
        {
          name: "blockindex",
          label: "Block",
          field: "blockindex",
          sortable: true,
          required: true,
          align: "left",
          style: "width: 10px"
        },
        {
          name: "blockhash",
          label: "Hash",
          field: "blockhash",
          sortable: true,
          required: true,
          align: "left",
          style: "width:80px"
        },
        {
          name: "amount",
          label: "Amount",
          field: "amount",
          sortable: true,
          required: true,
          align: "center"
        },
        {
          name: "timestamp",
          label: "Timestamp",
          field: "timestamp",
          sortable: true,
          required: true,
          align: "center"
        }
      ]
    };
  },
  created() {
    this.$root.$on("onGlobalSearch", this.doSearch);
  },
  methods: {
    doSearch(searchPhrase) {
      this.searchParam = searchPhrase;

      if (searchPhrase === CONST.latest) {
        this.showTable();
        console.log("SEARCH RESULT SEARCHING...  latest");
        this.$q.loading.show({
          delay: 400 // ms
        });
        this.$http
          .getLastTxs(20)
          .then(result => {
            this.$q.loading.hide();
            console.log("LASTTXS count: " + result.data.data.length);
            this.tableData = result.data.data;
          })
          .catch(err => {
            console.log(
              "ERROR getLastTxs when doSearch is performed. Error is " +
                err.message
            );
          });
      } else if (searchPhrase.length === CONST.addressCount) {
        this.showAddress();
        console.log("SEARCH RESULT SEARCHING...  address");
        this.$q.loading.show({
          delay: 400 // ms
        });
        this.$http
          .getAddressInfo(searchPhrase)
          .then(result => {
            this.$q.loading.hide();
            console.log("RESULT getAddressInfo: " + JSON.stringify(result));
          })
          .catch(err => {
            console.log(
              "ERROR getAddressInfo when doSearch is performed. Error is " +
                err.message
            );
          });
      } else if (
        searchPhrase.length === CONST.hashCount &&
        searchPhrase.substr(0, 5) === CONST.blockStart
      ) {
        this.showBlock();
        console.log("SEARCHING...  block hash");
        this.$q.loading.show({
          delay: 400 // ms
        });
        this.$http
          .getBlock(searchPhrase)
          .then(result => {
            this.$q.loading.hide();
            console.log("RESULT getBlock: " + JSON.stringify(result));
          })
          .catch(err => {
            console.log(
              "ERROR getBlock when doSearch is performed. Error is " +
                err.message
            );
          });
      } else if (searchPhrase.length === CONST.hashCount) {
        this.showTx();
        console.log("SEARCHING...  txid hash");
        this.$q.loading.show({
          delay: 400 // ms
        });
        this.$http
          .getTx(searchPhrase)
          .then(result => {
            this.$q.loading.hide();
            console.log("RESULT getTx: " + JSON.stringify(result));
          })
          .catch(err => {
            console.log(
              "ERROR getTx when doSearch is performed. Error is " + err.message
            );
          });
      }
    },
    tableSelected(rowData) {
      console.log("SELECTED: " + JSON.stringify(rowData));
    },
    showTable() {
      this.isShowTable = true;
      this.isShowAddress = this.isShowTx = this.isShowBlock = false;
    },
    showTx() {
      this.isShowTx = true;
      this.isShowAddress = this.isShowTable = this.isShowBlock = false;
    },
    showAddress() {
      this.isShowAddress = true;
      this.isShowTx = this.isShowTable = this.isShowBlock = false;
    },
    showBlock() {
      this.isShowBlock = true;
      this.isShowTx = this.isShowTable = this.isShowAddress = false;
    }
  }
};
</script>
