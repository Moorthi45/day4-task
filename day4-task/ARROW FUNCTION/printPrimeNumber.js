// print prime number
let numbers = [ 3, 34, 63, 45, 9, 10, 11];

let isPrime = number => {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

let primeNumbers = numbers.filter(number => isPrime(number));

console.log(primeNumbers);