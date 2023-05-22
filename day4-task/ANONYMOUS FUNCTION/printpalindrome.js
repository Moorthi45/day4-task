//print palindrome
let array = ["level", "moorthi", "mum", "guvi", "dad"];

let palindromesAnonymous = function(arr) {
  const palindromes = [];
  
  for (let word of arr) {
    const reversed = word.split("").reverse().join("");
    if (word === reversed) {
      palindromes.push(word);
    }
  }
  
  return palindromes;
}(array);

console.log(palindromesAnonymous);