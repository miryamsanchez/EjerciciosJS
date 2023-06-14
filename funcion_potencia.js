//potencia de x elevado a n
function potencia(x,n){
    var y=1;
    for(var veces=0;veces<n;veces++){
        y=y*x;
    }
    return y;
}
//test
console.log(potencia(6,0));
console.log(potencia(2,7));
console.log(potencia(5,3));