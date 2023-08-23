const baralho = []
let opcao = ""

do {
  opcao = prompt(
    "Cartas no baralho: " + baralho.length +
    "\n1. Adicionar uma carta\n2. Puxar uma carta\n3. Sair"
  )

  switch (opcao) {
    case "1":
      const novaCarta = prompt("Qual é a carta?")
      baralho.push(novaCarta)
      break
    case "2":
      const cartaPuxada = baralho.pop()
      if (!cartaPuxada) {
        alert("Não há nenhuma carta no baralho!")
      } else {
        alert("Você puxou um(a) " + cartaPuxada)
      }
      break
    case "3":
      alert("Saindo...")
      break
    default:
      alert("Opção inválida!")
  }

} while (opcao !== "3");
/*
const baralhoCartas = []

let opcao = ""
let nomeCarta = ""
nomeCarta = qtdCartas
qtdCartas = parseFloat(qtdCartas)

do {
    alert ("A quantidade de cartas no Baralho é: " + "\n" + qtdCartas)
    opcao = prompt (
        "Escolha uma das opções abaixo:" +
        "\n1. Adicionar uma carta" +
        "\n2. Puxar uma carta" +
        "\n3. Sair"
    )

    switch(opcao){
        case "1":
            let nomeCarta = prompt("Qual o nome da carta? \n")
            let novaCarta =+ baralhoCartas.push(nomeCarta)
            console.log(baralhoCartas)
            console.log(novaCarta)
            break
        case "2":
            let cartaPuxada = baralhoCartas.shift()
            console.log(baralhoCartas)
            console.log(cartaPuxada)
            alert("A carta puxada foi: " + cartaPuxada)
            break
        case "3":
            alert("Você saiu da mesa, acho que é o nosso fim")
            alert("Adeus...")
            break
        default:
            alert("Inválido, digite novamente")

    
    }
}
while(opcao !== "3" );
*/
