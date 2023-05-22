// IIFE function ( print  odd number in am array)

let number=["2","3","5","45","37","11"];

(function(){
    number.forEach(function(num){
        if(num%2!=0){
            console.log(num);
        }
    })
})()

