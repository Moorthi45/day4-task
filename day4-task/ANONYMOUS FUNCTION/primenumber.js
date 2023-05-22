//print prime number
var numbers = [99, 92, 67, 47, 50, 61, 45,];

var printPrimeNumbers = function(arr) {
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
      primeNumbers+=arr[i]+'';
    }
  }

  console.log( primeNumbers);
};

printPrimeNumbers(numbers);