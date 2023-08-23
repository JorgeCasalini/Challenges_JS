const listaDeCompras = ["Açúcar", false]
console.log(listaDeCompras)

listaDeCompras [0] = "Arroz"
listaDeCompras [1] = "Feijão"
listaDeCompras [2] = 7
listaDeCompras [5] = "Batata"

console.log(listaDeCompras)

console.log(listaDeCompras[4])

//JS permite criar 'posições futuras' 
//mesmo que não tenham sido declaradas,
//porém dá o valor "UNDEFINED", 
//já que não foram declaradas.