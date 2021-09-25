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
    "name": "Kelvin Schiller"
    }
]

describe('User tests', function() {
  beforeEach(function() {
      testUser1 = new User(1)
      testUser2 = new User(4)
      testUser3 = new User(6)
  });
  it('should be an instance of User', function() {
    expect(testUser1).to.be.instanceOf(User);
    expect(testUser2).to.be.instanceOf(User);
    expect(testUser3).to.be.instanceOf(User);

  });
  it('needs to accept one parameter of an ID that is a number', function() { 
    expect(testUser1.id).to.deep.equal(1)
    expect(testUser2.id).to.not.deep.equal(1)
    expect(testUser3.id).to.deep.equal(6)
  });
  it('should be able to retrieve the user name from the API when passed an ID', function() {
    expect(testUser1.name).to.deep.equal("John")
  });
});
