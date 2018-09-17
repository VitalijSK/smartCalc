class SmartCalculator {
    constructor(initialValue) {
      this.value = initialValue;
      this.prior = 1;
      
      this.last = initialValue;
      this.priors = [];
      this.priors.push({
          valueA : 0,
          valueB: 0,
          sing : this.addTwo,
          prior : 1
      });

    }
  
    add(number) {
      const prior = 1;
      if (prior >= this.prior) {
          this.priors.push({
              valueA : this.last,
              valueB: number,
              sing : this.addTwo,
              prior : prior
          });
        
      } else {
          this.getValue();
             const calc = this.priors.pop();
              calc.valueB = number;
        calc.sing = this.addTwo;
              this.priors.push(calc);
      
      }
      this.prior = prior;
      this.last = number;
      return this;
    }
    
    subtract(number) {
      const prior = 1;
      number *= -1;
      if (prior >= this.prior) {
          this.priors.push({
              valueA : this.last,
              valueB: number,
              sing : this.addTwo,
              prior : prior
          });
      } else {
          this.getValue();
             const calc = this.priors.pop();
              calc.valueB = number;
           calc.sing = this.addTwo;
              this.priors.push(calc);

      }
      this.prior = prior;
      this.last = number;
      return this;
    }
  
    multiply(number) {
      const prior = 2;
      if (prior >= this.prior) {
          this.priors.push({
              valueA : this.last,
              valueB: number,
              sing : this.mulTwo,
              prior : prior
          });
       } else {
                    this.getValue();
             const calc = this.priors.pop();
               calc.sing = this.mulTwo;
              calc.valueB = number;
              this.priors.push(calc);
         
            
      }
      this.prior = prior;
      this.last = number;
      return this;
    }
  
    devide(number) {
      const prior = 2;
      if (prior >= this.prior) {
          this.priors.push({
              valueA : this.last,
              valueB: number,
              sing : this.divTwo,
              prior : prior
          });
      } else {
               this.getValue();
             const calc = this.priors.pop();
        calc.sing = this.divTwo;
              calc.valueB = number;
              this.priors.push(calc);

      }
      this.prior = prior;
      this.last = number;
      return this;
    }
  
    pow(number) {
      const prior = 3;
      if (prior >= this.prior) {
          this.priors.push({
              valueA : this.last,
              valueB: number,
              sing : this.powTwo,
              prior : prior
          });
          this.prior = prior;
          this.last = number;
      } else {
          this.getValue();
          this.value = this.powTwo(this.last, number);
     
      }
      this.prior = prior;
      this.last = number;
      return this;
    }
    getValue() {
      if(this.priors.length === 0) {
          this.value;
          return;
      }
      while(this.priors.length > 1) {
          const calc = this.priors.pop();
          const calcTmp = this.priors.pop();
          calcTmp.valueB = calc.sing(calc.valueA, calc.valueB);
          this.priors.push(calcTmp);
      }
      const calc = this.priors.pop();

      this.value = calc.sing(calc.valueA, calc.valueB);
      this.priors.push({
          valueA : this.value,
          valueB: 0,
          sing : this.addTwo,
          prior : 1
      });

    }
    addTwo(a , b) {
        return a + b;
    }
    subTwo(a , b) {
        return a - b;
    }
    mulTwo(a , b) {
        return a * b;
    }
    divTwo(a , b) {
        return a / b;
    }
    powTwo(a , b) {
        if(a < 0) {
          return Math.pow(a, b) * -1;
        }
        return Math.pow(a, b);
    }
    valueOf () {
      this.getValue();
      return this.value;
    };
  }
module.exports = SmartCalculator;
