//sum of number
var array =["2","3","5","45","37","11"];

var sumNumber= function(){
var sumOfNum=0;
    for(let i=0;i<array.length;i++){
    sumOfNum+=Number(array[i]);
    }
    return sumOfNum;
}
var sum=sumNumber();
console.log(sum);