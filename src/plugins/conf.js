import config from "../../package.json";

var conf = {
  version: config.version,
  appName: config.name,
  author: config.author,
  org: "ProjectMerge.org"
};

export default ({
  Vue
}) => {
  Vue.prototype.$conf = conf;
};
