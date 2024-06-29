const os = require('os');

module.exports = {
    apps: [
        {
            name: 'NuxtAppName',
            port: '3000',
            exec_mode: 'cluster',
            instances: 'max',
            interpreter: "node",
            script: './.output/server/index.mjs'
        }
    ]
}
