//Array de Exemplo
const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]

//Map 

// const nomes = []
// for (let i = 0; i < personagens.length; i++) {
//   const personagem = personagens[i]
//   nomes.push(personagem.nome)
//}


// map: permite obter um novo array a partir de um array existenste
const nomes = personagens.map(function (personagem) {
    return personagem.nome
})

// Filter
// const orcs = []
// for (let i = 0; i < personagens.length; i++) {
//   const personagem = personagens[i]
//   if (personagem.raca === "Orc") {
//    orcs.push(personagem)
//   }}


// filter: permite obter um novo array contendo apenas elementos específicos de um array existente
const orcs = personagens.filter(function (personagem) {
    return personagem.raca === "Orc"
})

//Reduce
// let nivelTotal = 0
// for (let i = 0; i < personagens.length; i++) {
//     nivelTotal += personagens[i].nivel
// }

// reduce: serve para reduzir um array existente a um valor final qualquer,
// passando um valor entre cada iteração sobre esse array e retornando ele no final
const nivelTotal = personagens.reduce(function (acumulador, personagem) {
    return acumulador + personagem.nivel
}, 0)

const racas = personagens.reduce(function (acumulador, personagem) {
    if (acumulador[personagem.raca]) {
        acumulador[personagem.raca].push(personagem)
    } else {
        acumulador[personagem.raca] = [personagem]
    }
    return acumulador
}, {})

//Sort
// sort: ordena os elementos de um array a partir de comparações entre duplas de elementos
personagens.sort(function (a, b) {
    return a.nivel - b.nivel
})


//Exemplo aplicado para e-commerce


const itensLoja = [
    { tamanho: 42, produto: "Camiseta Thrall", categoria: "camiseta", lote: "0001" },
    { tamanho: 28, produto: "Camiseta Garrosh", categoria: "camiseta", lote: "0002" },
    { tamanho: 35, produto: "Camiseta Varok", categoria: "camiseta", lote: "0003" },
    { tamanho: 35, produto: "Caneca Uther", categoria: "caneca", lote: "1001" },
    { tamanho: 26, produto: "Caneca Jaina", categoria: "caneca", lote: "1002" },
    { tamanho: 39, produto: "Quadro Tyrande", categoria: "quadro", lote: "2001" },
    { tamanho: 29, produto: "Funko pop Muradin", categoria: "funko pop", lote: "3001" },
]

//Exemplo método map utilizado em um e-commerce
const produtos = itensLoja.map(function(item){
    return item.produto
})

//Exemplo método filter utilizado em um e-commerce
const categorias = itensLoja.filter(function(categoria){
    return categoria.categoria === "camiseta"
})


//Exemplo método reduce utilizado em um e-commerce

const loteCamiseta = itensLoja.reduce(function (totalCamisetas, camiseta) {
    if (totalCamisetas[camiseta.categoria]){
        totalCamisetas[camiseta.categoria].push(camiseta)
    }else{
        totalCamisetas[camiseta.categoria] = [camiseta]
    } 
    return totalCamisetas
}, {})

//Método sort modifica o array original,
//por isso não é necessário criar uma váriavel para ele
itensLoja.sort(function(a,b){
    return b.tamanho - a.tamanho
})

//Quando posto o slice() antes de sort, cria uma cópia do array e
//não modifica o original
const tamanhosItens = itensLoja.slice().sort(function(a,b){
    return a.tamanho - b.tamanho
})

console.log(itensLoja)
console.log(tamanhosItens)