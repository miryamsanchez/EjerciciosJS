var z=1;
var z0=0;
while(Math.abs(z-z0)>1e-9){
    z0=z;
    z=1/(1+z);
    console.log(z);
}