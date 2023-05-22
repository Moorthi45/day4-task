let array = ["level", "moorthi", "mum", "guvi", "dad"];
let palindromesArrow = arr => {
let palindromes = '';
    
    for (let i of arr) {
      let reversed = i.split("").reverse().join("");
      if (i === reversed) {
        palindromes+=i+' ';
      }
    }
    
    return palindromes;
  };
  
  console.log(palindromesArrow(array));