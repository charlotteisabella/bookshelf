const { agent } = require('../helper');

describe('/books route', () => {
  describe('GET /', () => {
    it('returns a list of books', () => {
      return agent.get('/books').then(response => {
        response.status.must.eql(200);
        response.body.must.eql([
          {
            id: "123",
            title: 'nikolay',
            rating: 5
          },
          {
            id: "345",
            title: 'pikachu',
            rating: 4
          }
        ]);
      });
    });
  });

  describe('GET) /:id', () => {
    it('returns an individual book', () => {
      return agent.get('/books/123').then(response => {
        response.status.must.eql(200);
        response.body.must.eql({
          id: '123',
          title: 'nikolay',
          rating: 5
        });
      });
    });

    it('handles non-existent books', () => {
      return agent.get('/books/3434w5').then(response => {
        response.status.must.eql(404);
        response.body.must.eql({
          error: 'not found'
        });
      });
    });
  });
});
