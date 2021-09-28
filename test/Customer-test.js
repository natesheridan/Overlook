import chai from 'chai';
import Customer from '../src/js/user/Customer';

const expect = chai.expect;


let testCustomer1;
let testCustomer2;
let testCustomer3;
let sampleCustomerData = [
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

describe('Customer Tests', function() {
  beforeEach(function() {
    testCustomer1 = new Customer(sampleCustomerData[0]);
    testCustomer2 = new Customer(sampleCustomerData[1]);
    testCustomer3 = new Customer(sampleCustomerData[2]);
  });
  it('Should be instance of a customer and have user traits as well', function() {
    expect(testCustomer1).to.be.instanceOf(Customer);
    expect(testCustomer2).to.be.instanceOf(Customer);
    expect(testCustomer3).to.be.instanceOf(Customer);
  });
});
