const imoveis = []
let opcao = ""

do {
    opcao = prompt("Bem vindo a Imobiliaria\n" +
        "Total de imóveis listados: " + imoveis.length +
        "\n\nEscolha uma opção a seguir:\n" +
        "1.Adicionar um Imóvel\n" +
        "2.Listar os Imóveis\n" +
        "3.Sair")

    switch (opcao) {
        case "1":
            const imovel = {}

            imovel.proprietario = prompt("Digite o nome do proprietário do imóvel: ")
            imovel.quartos = prompt("Quantos quartos o imóvel possue? ")
            imovel.banheiros = prompt("Quantos banheiros possue o imóvel? ")
            imovel.garagem = prompt("O imóvel possue garagem? (Sim/Não)")

            const confirmacao = confirm(
                "Salvar as informações:\n" +
                "\nProprietário: " + imovel.proprietario +
                "\nQuantidade de quartos: " + imovel.quartos +
                "\nQuantidade de banheiros: " + imovel.banheiros +
                "\nPossue garagem: " + imovel.garagem
            )
            if (confirmacao) {
                imoveis.push(imovel)
            } else {
                alert("Você errou companheiro, voltando")
            }
            break
        case "2":
            for (let i = 0; i < imoveis.length; i++) {
                alert(
                    (i + 1) + "° imovel " +
                    "\nProprietário: " + imoveis[i].proprietario +
                    "\nQuantidade de quartos: " + imoveis[i].quartos +
                    "\nQuantidade de banheiros: " + imoveis[i].banheiros +
                    "\nPossui garagem: " + imoveis[i].garagem
                )
            }
            break
        case "3":
            alert("¡Hasta Luego!")
            break
        default:
            alert("Opção inválida")
    }
} while (opcao !== "3")