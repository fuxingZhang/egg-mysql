# egg-mysql

[mysql](https://github.com/mysqljs/mysql) plugin for Egg.js

> NOTE: This plugin just for integrate mysql into Egg.js, more documentation please visit https://github.com/mysqljs/mysql

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/@eggplugin/mysql.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@eggplugin/mysql
[travis-image]: https://img.shields.io/travis/eggjs/@eggplugin/mysql.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/@eggplugin/mysql
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/@eggplugin/mysql.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/@eggplugin/mysql?branch=master
[david-image]: https://img.shields.io/david/eggjs/@eggplugin/mysql.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/@eggplugin/mysql
[snyk-image]: https://snyk.io/test/npm/@eggplugin/mysql/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/@eggplugin/mysql
[download-image]: https://img.shields.io/npm/dm/@eggplugin/mysql.svg?style=flat-square
[download-url]: https://npmjs.org/package/@eggplugin/mysql

## Install

```bash
$ npm i @eggplugin/mysql --save
```

## Configuration

```js
// {app_root}/config/plugin.js
exports.mysql = {
  enable: true,
  package: '@eggplugin/mysql',
};
```
see [config/config.default.js](config/config.default.js) for more detail.

### Simple instance

```js
// {app_root}/config/config.default.js
exports.mysql = {
  client: {
    user: '',
    host: '',
    database: '',
    password: ''
    // port: '3306',
    // ...
  },
  // load into app, default is open
  app: true,
  // load into agent, default is close
  agent: false,
};
```

Usage:

```js
(async () => {
  // you can access to simple database instance by using app.mysql.

}).catch(console.error);
```

### Multiple instance

```js
exports.mysql = {
  // default configuration for all clients
  default: {
    port: 3306,
    connectionLimit: 10,
    // connectTimeout: 10000,
    // dateStrings: true
  },
  clients: {
    // clientId, access the client instance by app.pg.get('clientId')
    db1: {
      user: '',
      host: '',
      database: '',
      password: ''
    // ...
    },
    db2: {
      user: '',
      host: '',
      database: '',
      password: ''
      // ...
    },
    // ...
  },
  // load into app, default is open
  app: true,
  // load into agent, default is close
  agent: false,
};
```

Usage:

```js
(async () => {
  const db1 = app.mysql.get('db1'); 
  const db2 = app.mysql.get('db2'); 
  
}).catch(console.error);
```

## Questions & Suggestions

Please open an issue [here](https://github.com/fuxingZhang/egg-mysql/issues).

## License

[MIT](LICENSE)