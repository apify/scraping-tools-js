const browser = require('./browser');
const consts = require('./consts');
const crawling = require('./crawling');
const performance = require('./performance');
const platform = require('./platform');
const queue = require('./queue');
const social = require('./social');
const stealth = require('./stealth');
const time = require('./time');
const transform = require('./transform');

const log = () => {};
const sleep = () => {};

module.exports = {
    log,
    sleep,
    browser,
    consts,
    crawling,
    platform,
    queue,
    social,
    stealth,
    performance,
    time,
    transform,
};

// const {tools} = require('apify-tools')
// tools.log()
// tools.sleep()
// tools.browser.login()
// tools.crawling.enqueueLinks()
// tools.performance.intervalPushData()
