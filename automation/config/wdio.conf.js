const commonConf = require('../../common.conf');

const mainConf = {
  baseUrl: 'https://automation-dummy.vercel.app/',
  capabilities:
    [
          {
            maxInstances: 1,
            browserName: 'chrome',
            acceptInsecureCerts: true,
            'goog:chromeOptions': {
            args: ['--window-size=1920,1080']
            },
          },
        ],
  specs: ['./automation/specs/**/*.js'],
};

module.exports.config = Object.assign({}, commonConf, mainConf);
