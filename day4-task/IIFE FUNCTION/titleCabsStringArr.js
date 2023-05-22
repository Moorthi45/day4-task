// IIFE Function( little caps in a string array)

let Array = ["moorthi", "guvi", "guys"];

let titleCaps = (function(arr) {
  return arr.map(word => word.charAt(0).toUpperCase() + word.slice(1));
})(Array);

console.log(titleCaps);

