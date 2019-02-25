import axios from 'axios'

const blockExplorerAPI = axios.create({
  baseURL: "https://explorer.projectmerge.org/"
});

let clients = {
  $http: {
    get() {
      return {
        reportAPI: blockExplorerAPI,
        getDifficulty() {
          return blockExplorerAPI.get("api/getdifficulty", {});
        },
        getMoneySupply() {
          return blockExplorerAPI.get("ext/getmoneysupply", {});
        },
        getHashRate() {
          return blockExplorerAPI.get("api/getnetworkhashps", {});
        },
        getLastTxs(count) {
          console.log("GetLastTxs: ext/getlasttxs/10/" + count);
          return blockExplorerAPI.get("ext/getlasttxs/10/20", {});
        },
        getAddressInfo(address) {
          console.log("getAddressInfo: ext/getaddress/" + address);
          return blockExplorerAPI.get("ext/getaddress/" + address, {});
        },
        getBlock(hash) {
          console.log("getBlock: api/getblock?hash=" + hash);
          return blockExplorerAPI.get("api/getblock?hash=" + hash, {});
        },
        getTx(hash) {
          console.log("getTx: api/getrawtransaction?txid=" + hash + "&decrypt=1");
          return blockExplorerAPI.get("api/getrawtransaction?txid=" + hash + "&decrypt=1", {});
        }
      }
    }
  }
}

export default ({
  Vue
}) => {
  // Vue.prototype.$axios = axios
  Object.defineProperties(Vue.prototype, clients);
}
