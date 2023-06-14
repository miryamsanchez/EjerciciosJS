function potenciar(x,n){
    if(n==0){
        return 1;
        }
        else{
            return x*potenciar(x,n-1);
        }
}
//test
console.log(potenciar(6,0));
console.log(potenciar(2,7));
console.log(potenciar(5,3));