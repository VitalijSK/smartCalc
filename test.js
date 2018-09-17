const assert = require('assert');
Object.freeze(assert);
const SmartCalculator = require('./src/index');

describe('SmartCalculator', () => {
  it('1', () => {
    const calculator = new SmartCalculator(1);

    const value = calculator
      .add(5)
      .add(5);

    assert.equal(value, 11);
  });

  it('2', () => {
    const calculator = new SmartCalculator(2);

    const value = calculator
      .add(2)
      .multiply(2);

    assert.equal(value, 6);
  });

  it('3', () => {
    const calculator = new SmartCalculator(1);

    const value = calculator
      .add(5)
      .multiply(5)
      .add(5);

    assert.equal(value, 31);
  });

  it('4', () => {
    const calculator = new SmartCalculator(2);

    const value = calculator
      .add(2)
      .add(2)
      .multiply(2);

    assert.equal(value, 8);
  });

  it('5', () => {
    const calculator = new SmartCalculator(2);

    const value = calculator
      .add(2)
      .add(4)
      .devide(4);

    assert.equal(value, 5);
  });

  it('6', () => {
    const calculator = new SmartCalculator(2);

    const value = calculator
      .add(4)
      .devide(2)
      .add(4)
      .devide(4)
      .add(6)
      .devide(3);

    assert.equal(value, 7);
  });


  it('7', () => {
    
    const calculator = new SmartCalculator(3);

    const value = calculator
      .pow(1)
      .pow(1);
  
    assert.equal(value, 3);
  });
  
  it('8', () => {
  
    const calculator = new SmartCalculator(10);

    const value = calculator
      .multiply(2)
      .pow(2)
      .subtract(95)
      .subtract(56)
      .pow(2)
      .pow(2)
      .pow(1)
      .multiply(1);
  
    assert.equal(value, -9834551);
  });
  
  it('9', () => {
  
    const calculator = new SmartCalculator(9);

    const value = calculator
      .multiply(1)
      .subtract(73)
      .pow(2)
      .add(62)
      .multiply(1)
      .add(29)
      .add(60)
      .subtract(8)
      .subtract(83)
      .add(50);
  
    assert.equal(value, -5210);
  });
  
  it('10', () => {
  
    const calculator = new SmartCalculator(2);

    const value = calculator
      .multiply(1)
      .subtract(35)
      .add(34)
      .subtract(11)
      .add(18)
      .subtract(91)
      .pow(2)
      .add(5)
      .subtract(56)
      .add(36);
  
    assert.equal(value, -8288);
  });
  
  it('11', () => {
  
    const calculator = new SmartCalculator(7);

    const value = calculator
      .add(63)
      .subtract(54)
      .pow(2)
      .pow(1)
      .add(82)
      .add(89)
      .add(81)
      .multiply(1)
      .pow(1)
      .add(4);
  
    assert.equal(value, -2590);
  });
  
  it('12', () => {
  
    const calculator = new SmartCalculator(2);

    const value = calculator
      .subtract(100)
      .add(67)
      .add(27)
      .pow(2)
      .pow(1)
      .subtract(53);
  
    assert.equal(value, 645);
  });
  
  it('13', () => {
  
    const calculator = new SmartCalculator(1);

    const value = calculator
      .pow(1)
      .multiply(2);
  
    assert.equal(value, 2);
  });
  
  it('14', () => {
  
    const calculator = new SmartCalculator(8);

    const value = calculator
      .subtract(81)
      .subtract(45)
      .multiply(1)
      .subtract(27)
      .add(45);
  
    assert.equal(value, -100);
  });
  
  it('15', () => {
  
    const calculator = new SmartCalculator(8);

    const value = calculator
      .subtract(71)
      .multiply(2)
      .add(100)
      .subtract(74)
      .subtract(67);
  
    assert.equal(value, -175);
  });
  
  it('16', () => {
  
    const calculator = new SmartCalculator(2);

    const value = calculator
      .add(50)
      .multiply(2)
      .add(44)
      .pow(1)
      .add(5)
      .multiply(1)
      .multiply(2);
  
    assert.equal(value, 156);
  });
  
  it('17', () => {
  
    const calculator = new SmartCalculator(9);

    const value = calculator
      .pow(2)
      .multiply(1)
      .pow(1)
      .multiply(1);
  
    assert.equal(value, 81);
  });
  
  it('18', () => {
  
    const calculator = new SmartCalculator(4);

    const value = calculator
      .multiply(1);
  
    assert.equal(value, 4);
  });
  
  it('19', () => {
  
    const calculator = new SmartCalculator(7);

    const value = calculator
      .pow(2)
      .subtract(2)
      .multiply(1)
      .pow(2)
      .pow(1);
  
    assert.equal(value, 47);
  });
  
  it('20', () => {
  
    const calculator = new SmartCalculator(2);

    const value = calculator
      .multiply(2)
      .pow(1)
      .pow(1)
      .pow(2)
      .multiply(2)
      .multiply(2)
      .multiply(1);
  
    assert.equal(value, 16);
  });
  
  it('21', () => {
  
    const calculator = new SmartCalculator(1);

    const value = calculator
      .pow(1)
      .multiply(1)
      .add(95)
      .subtract(96);
  
    assert.equal(value, 0);
  });
  
  it('22', () => {
  
    const calculator = new SmartCalculator(4);

    const value = calculator
      .pow(1)
      .pow(1)
      .pow(1)
      .multiply(2)
      .add(80)
      .subtract(11)
      .multiply(1)
      .subtract(41)
      .subtract(65);
  
    assert.equal(value, -29);
  });
  
  it('23', () => {
  
    const calculator = new SmartCalculator(7);

    const value = calculator
      .subtract(73)
      .multiply(1);
  
    assert.equal(value, -66);
  });
  
  it('24', () => {
  
    const calculator = new SmartCalculator(5);

    const value = calculator
      .pow(1)
      .pow(2)
      .add(97);
  
    assert.equal(value, 102);
  });
  
  it('25', () => {
  
    const calculator = new SmartCalculator(10);

    const value = calculator
      .pow(1)
      .pow(1);
  
    assert.equal(value, 10);
  });
 
});