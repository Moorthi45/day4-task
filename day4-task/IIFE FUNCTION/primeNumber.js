// IIFE Function( little caps in a string array)

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

(function(arr) {
  var primeNumbers = "";

  var isPrime = function(number) {
    if (number <= 1) {
      return false;
    }
  
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  };

  for (var i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      primeNumbers+=arr[i]+' ';
    }
  }

  console.log( primeNumbers);
})(numbers);


