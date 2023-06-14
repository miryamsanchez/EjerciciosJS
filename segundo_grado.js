var a=1;
var b=2;
var c=-3;
var delta=Math.pow(b,2)-4*a*c;
if(delta>=0){
    var x1=(-b+Math.sqrt(delta))/(2*a);
    var x2=(-b-Math.sqrt(delta))/(2*a);
    console.log(x1,x2);
}else{
    console.log("No tiene soluciones reales")
}
