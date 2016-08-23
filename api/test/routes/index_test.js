const { agent } = require('../helper');

describe('/ route', () => {
  it('responds nicely', () => {
    return agent.get('/').then(response => {
      response.status.must.eql(200);
      response.body.must.eql({ ok: true });
    });
  });
});
