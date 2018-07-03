const utils = require('./utils.js');
const should = require('should');

describe('utils.js의 capitalize() 함수는 ', () => {
  it('문자열의 첫번쨰 문자를 대문자로 변환한다', () => {
    const result = utils.capitalize('hello');
    result.should.be.equal('Hello');
  });
});