var pjson = require('./package.json');
const v = pjson.version
console.log(v);

module.exports = {
  scripts: {
    serve: 'vue-cli-service serve',
    build: 'vue-cli-service build',
    lint: 'vue-cli-service lint'
  }
};
