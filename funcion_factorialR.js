function factorialR(n){
    if(n>0){
        return n*factorialR(n-1);
    }else{
        return 1;
    }
}

console.log(factorialR(5));
console.log(factorialR(0));
console.log(factorialR(14));