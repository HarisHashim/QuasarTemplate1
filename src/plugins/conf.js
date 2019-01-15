import config from "../../package.json";

var conf = {
  version: config.version,
  author: "HarisHashim@gmail.com",
  org: "facebook.com/groups/Devs.MY"
};

export default ({ Vue }) => {
  Vue.prototype.$conf = conf;
};
