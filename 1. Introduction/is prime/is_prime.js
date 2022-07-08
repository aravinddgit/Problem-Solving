const isPrime = (n) => {
    if(n < 2) return false
    let loopLimit = Math.floor(Math.sqrt(n))
    for(let index=2; index<=loopLimit; index++){
      if(n % index === 0){
        // n is divisible by a number other than a and itself - not prime
        return false
      }
    }
    return true
  };
  
  /*
  n = input number
  Time: O(square_root(n))
  Space: O(1)
  */
  
  
  module.exports = {
    isPrime
  };