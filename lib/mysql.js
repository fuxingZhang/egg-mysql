'use strict';

const assert = require('assert');
const mysql = require('mysql');

module.exports = app => {
  app.addSingleton('mysql', createOneClient);
};

function createOneClient(config, app) {
  const { host, port, user, database } = config;

  assert(host && port && user && database,
    `[egg-mysql] 'host: ${host}', 'port: ${port}', 'user: ${user}', 'database: ${database}' are required on config`);

  app.coreLogger.info('[egg-mysql] connecting %s@%s:%s/%s', user, host, port, database);

  const pool = mysql.createPool(config);

  app.beforeStart(async () => {
    const { rows } = await pool.query('SELECT 1 + 1 AS result');
    assert(rows[0].result === 2);
    app.coreLogger.info('[egg-mysql] init instance success');
  });

  return pool;
}
