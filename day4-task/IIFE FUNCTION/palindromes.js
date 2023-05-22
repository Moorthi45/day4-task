//IIFE function ( print palindrome numbers in an array)
let array = ["level", "moorthi", "mum", "guvi", "dad"];
 let palindromes = "";
 (function(arr) {
  
  for (let i of arr) {
    const reversed = i.split("").reverse().join("");
    if (i === reversed) {
      palindromes+=i+' ';
    }
  }
})(array);

console.log(palindromes); 

