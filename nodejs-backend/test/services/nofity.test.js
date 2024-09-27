const assert = require('assert');
const app = require('../../src/app');

describe('\'nofity\' service', () => {
  it('registered the service', () => {
    const service = app.service('nofity');

    assert.ok(service, 'Registered the service (nofity)');
  });
});
