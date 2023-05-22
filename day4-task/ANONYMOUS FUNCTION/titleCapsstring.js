//little caps in array
let array = ["moorthi", "guvi", "guys"];

let titleCaps = function(arr) {
  return arr.map(word => word.charAt(0).toUpperCase() + word.slice(1));
}(array);

console.log(titleCaps);
