//print  odd numbers
var sum = function(num) {
    for(let i=0;i<num.length;i++){
        if(num[i]%2!=0){
            console.log(num[i]);
        }
    }
} 
sum(["1","21","45","22"]) 