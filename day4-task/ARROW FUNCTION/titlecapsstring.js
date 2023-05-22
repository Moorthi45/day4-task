// title caps in an string array
let array = ["moorthi", "guvi", "guys"];

let titleCapsArrow = (arr) => {
   return arr.map(word => word.charAt(0).toUpperCase() + word.slice(1));
}
console.log(titleCapsArrow(stringArray));

