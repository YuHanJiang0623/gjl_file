'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_ROOT: '""',// dev环境配制了服务代理，API_ROOT的api是配制的代理地址
  Mock: true,
  ENV_CONFIG:'"dev"'
})
