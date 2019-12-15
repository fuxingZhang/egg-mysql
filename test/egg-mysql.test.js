'use strict';

const mock = require('egg-mock');

describe('test/egg-mysql.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/egg-mysql-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET mysql success', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, mysql')
      .expect(200);
  });
});
