/*
Escreva um programa em javascript para calcular a área de diferentes formas geométricas.
O programa deve iniciar com um menu contendo as diferentes opções de cálculas.
As opções devem ser:

- área do triângulo: base * altura / 2
- área do retângulo: base * altura
- área do quadrado: lado²
- área do trapézio: (base maior + base menor) * altura / 2
- área do círculo: pi * raio² (considere pi = 3.14)

Você deve escrever o programa usando funções sempre que possível
para separar os procedimentos.
O programa também deve ter uma opção de “Sair” e
enquanto ela não for escolhida deverá voltar ao menu.
*/

let opcao = ""
let resultado = ""

do{
    opcao = prompt("Bem vindo a calculadora geométrica, calcule uma das opções a seguir:\n"+
    "1.Área do retângulo\n"+
    "2.Área do quadrado\n"+
    "3.Área do triângulo\n"+
    "4.Área do trapézio\n"+
    "5.Área do círculo\n"+
    "6.Sair")

    switch(opcao){
        case "1":
            let base = prompt("Qual o valor da base ? ")
            let altura = prompt("Qual o valor da altura ? ") 
            function areaRetangulo(base, altura) {
                return base * altura
            }
            alert("O valor da área do retângulo é: "+ areaRetangulo(base,altura) + "m²")
        break
        case "2":
            let lado = prompt("Qual o valor do lado ? ")
            function areaQuadrado(lado){
                return areaRetangulo(lado, lado)
            }
            alert("O valor da área do retângulo é: "+ areaQuadrado(lado) + "m²")
        break
        case "3":
            let baseTriangulo = prompt("Qual o valor da base ? ") 
            let alturaTriangulo= prompt("Qual o valor da altura ? ")
            function areaTriangulo( baseTriangulo,alturaTriangulo){
                return areaRetangulo(baseTriangulo,alturaTriangulo)/2
            }
            alert("O valor da área do triângulo é: "+ areaTriangulo(baseTriangulo,alturaTriangulo) + "m²")
        break
        case "4":
            //Tanto o parseFloat quanto o símbolo "+" converte o resultado em Number
            //Não concatenando a string mas sim somando quando utilizar o sinal "+"

            let baseMaior = parseFloat(prompt("Qual o valor da base maior ?"))
            let baseMenor = +(prompt("Qual o valor da base menor ?"))
            let baseTrapezio = (baseMaior + baseMenor)
            let alturaTrapezio = +(prompt("Qual o valor da altura ?"))
            function areaTrapezio(baseTrapezio, alturaTrapezio){
                return areaTriangulo( baseTrapezio, alturaTrapezio)
            }
            alert("O valor da área do trapézio é: "+ areaTrapezio(baseTrapezio,alturaTrapezio) + "m²")
        break
        case "5":
        break
        case "6":
            alert("Encerrando o programa...")
        break
        default:
        alert("Opção inválida, escolha outra.")
        break
    }
}while(opcao !=="6")