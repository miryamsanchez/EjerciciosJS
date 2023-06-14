function factorialA(n){
    var y=1;
    for (var k=n;k>0;k--){
        y=y*k;
    }
    return y;
}
console.log(factorialA(6));
console.log(factorialA(0));
console.log(factorialA(14));