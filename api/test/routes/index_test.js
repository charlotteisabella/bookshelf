require('must');
const app = require('../../src/app');
const doubleagent = require('doubleagent');
const agent = doubleagent(app);

describe('/ route', () => {
  it('responds nicely', () => {
    return agent.get('/').then(response => {
      response.status.must.eql(200);
      response.body.must.eql({ ok: true });
    });
  });
});
