class SmartCalculator {
    constructor(initialValue) {
      this.value = initialValue;
      this.prior = 1;
      
      this.last = initialValue;
      this.priors = [];
      this.priors.push({
          valueA : 0,
          valueB: initialValue,
          sing : (a, b)=> {
            return a + b;
            },
          prior : 1
      });

    }
  
    add(number) {
        const prior = 1;
        const oper = (a, b)=> {
           return a + b;
        }
  
        return this.getObj (prior, number, oper);
      }
      
      subtract(number) {
        const prior = 1;
        number *= -1;
        const oper = (a, b)=> {
          return a + b;
       }
  
        return this.getObj (prior, number, oper);
      }
    
      multiply(number) {
        const prior = 2;
        const oper = (a, b)=> {
          return a * b;
       }
  
        return this.getObj (prior, number, oper);
      }
    
      devide(number) {
        const prior = 2;
        const oper = (a, b)=> {
          return a / b;
       }
  
        return this.getObj (prior, number, oper);
      }
    
      pow(number) {
        const prior = 3;
        const oper = (a, b)=> {
          if(a < 0 && b % 2 === 0) {
              return Math.pow(a, b) * -1;
            }
            return Math.pow(a, b);
       }
        return this.getObj (prior, number, oper);
      }
    getValue(number, prior, oper) {
      if(this.priors.length === 0) {
          this.value;
          return;
      }

      while(this.priors.length > 1) {
          const calc = this.priors.pop();
          if (calc.prior <= prior) {
              this.priors.push(calc);
              break;
          }
          const calcTmp = this.priors.pop();
          calcTmp.valueB = calc.sing(calc.valueA, calc.valueB);
          this.priors.push(calcTmp);
      }
      const calc = this.priors.pop();
      
      this.value = calc.valueB;
      this.priors.push(calc);
      this.priors.push({
              valueA : calc.valueB,
              valueB: number,
              sing : oper,
              prior : prior
          });
      
    }
    getObj (prior, number, oper) {
        if (prior > this.prior) {
            const calc = this.priors.pop();
            this.priors.push(calc);
            this.priors.push({
                valueA : calc.valueB,
                valueB: number,
                sing : oper,
                prior : prior
            });
            
        } else {
            this.getValue(number, prior, oper);
        }
        this.prior = prior;
        return this;
    }    
    valueOf () {
      this.getValue();
      return this.value;
    };
  }
module.exports = SmartCalculator;
