function Hanoi(origen, destino,aux,n){
    if(n>1) 
     {
        Hanoi(origen, aux, destino, n-1);
    }
    console.log("Mover disco"+n+" de "+origen+" a "+destino);
    if(n>1){
        Hanoi(aux, destino, origen, n-1);
    } 
}
Hanoi("A", "B","C", 5
  );