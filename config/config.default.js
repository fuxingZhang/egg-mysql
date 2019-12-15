'use strict';

/**
 * egg-mysql default config
 * @member Config#mysql
 */
exports.mysql = {
  // default configuration for all clients
  default: {
    port: 3306,
    connectionLimit: 10,
    // connectTimeout: 10000,
    // dateStrings: true
  },
  app: true,
  agent: false,

  // Single client
  // client: {
  //   user: '',
  //   host: '',
  //   database: '',
  //   password: ''
  //   // ...
  // },

  // Multi client
  // clients: {
  //   client1: {
  //     user: '',
  //     host: '',
  //     database: '',
  //     password: ''
  //     // ...
  //   },
  //   client2: {
  //     user: '',
  //     host: '',
  //     database: '',
  //     password: ''
  //     // ...
  //   },
  // },
};
