import chai from 'chai';
import User from '../src/js/user/User';

const expect = chai.expect;


let testUser1;
let testUser2;
let testUser3;
let sampleData = [
    {
    "id": 1,
    "name": "Leatha Ullrich"
    },
    {
    "id": 2,
    "name": "Rocio Schuster"
    },
    {
    "id": 3,
    }
]

describe('User tests', function() {
  beforeEach(function() {
      testUser1 = new User(sampleData[0].id, sampleData[0].name)
      testUser2 = new User(sampleData[1].id, sampleData[1].name)
      testUser3 = new User(sampleData[2].id)
  });
  it('should be an instance of User', function() {
    expect(testUser1).to.be.instanceOf(User);
    expect(testUser2).to.be.instanceOf(User);
    expect(testUser3).to.be.instanceOf(User);

  });
  it('needs to accept two parameters: id / name', function() { 
    expect(testUser1.id).to.be.a('number');
    expect(testUser2.name).to.be.a('string');
    expect(testUser2.id).to.not.be.a('string');
  });
  it('ID should be a number integer', function() {
    expect(testUser1.name).to.deep.equal("Leatha Ullrich")
    expect(testUser2.name).to.deep.equal("Rocio Schuster")
    expect(testUser3.name).to.not.deep.equal("Kelvin Schiller")
  });
  it('should provide response if a user does not have a name', function() {
    expect(testUser1.name).to.deep.equal("Leatha Ullrich")
    expect(testUser3.name).to.deep.equal("nullName")
  })
});
