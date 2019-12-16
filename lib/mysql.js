'use strict';

const assert = require('assert');
const { Pool } = require('@node-mysql/mysql');

module.exports = app => {
  app.addSingleton('mysql', createOneClient);
};

function createOneClient(config, app) {
  const { host, user, database, port } = config;

  assert(host, '[egg-mysql] host is required on config');
  assert(user, '[egg-mysql] user is required on config');
  assert(database, '[egg-mysql] database is required on config');

  app.coreLogger.info('[egg-mysql] connecting %s@%s:%s/%s', user, host, port, database);

  const pool = new Pool(config);

  app.beforeStart(async () => {
    const { rows } = await pool.query('SELECT 1 + 1 AS result');
    assert(rows[0].result === 2);
    app.coreLogger.info('[egg-mysql] init instance success');
  });

  return pool;
}