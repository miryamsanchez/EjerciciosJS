var lista=["alpha", "bravo", null,"delta", "echo"];
for (var i in lista){
    if(lista[i]==null) break ;
    console.log(lista[i])
}     