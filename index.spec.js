const app = require('./index');
const request = require('supertest');

describe('GET /users는 ', () => {
  it('다음과 같습니다.', (done) => {
    request(app)
          .get('/users')
          .end((err, res) => {
            console.log(res.body);
            done();
          })
  })
})