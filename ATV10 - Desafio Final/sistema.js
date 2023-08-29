function executar() {
    const vagasDisponiveis = []
    let opcao = ""
    do {
        opcao = prompt("Bem vindo ao Sistema de Vagas, escolha uma opção:\n" +
            "1.Listar vagas disponíveis\n" +
            "2.Criar uma nova vaga\n" +
            "3.Visualizar uma vaga\n" +
            "4.Inscrever um candidato em uma vaga\n" +
            "5.Excluir uma vaga\n" +
            "6.Sair")

        switch (opcao) {
            case "1":
                alert("As vagas disponíveis são: " + vagasDisponiveis)
                break
            case "2":
                const novaVaga = {}

                novaVaga.nomeVaga = prompt("Digite o nome da vaga:")
                novaVaga.descricaoVaga = prompt("Digite uma descrição para a vaga")
                novaVaga.dataLimite = prompt("Qual a data limite da vaga?")

                const confirmarVaga = confirm(
                    "Salvar as informações:\n" +
                    "\nNome da vaga: " + novaVaga.nomeVaga +
                    "\nDescrição: " + novaVaga.descricaoVaga +
                    "\nData Limite: " + novaVaga.dataLimite
                )

                if (confirmarVaga) {
                    vagasDisponiveis.push(novaVaga)
                } else {
                    alert("Vaga não criada, voltando")
                }
                break
            case "3":
                for (let i = 0; i < vagasDisponiveis.length; i++) {
                    alert(
                        (i + 1) + "° vagas " +
                        "\nNome da Vaga: " + vagasDisponiveis[i].nomeVaga +
                        "\nDescrição: " + vagasDisponiveis[i].descricaoVaga +
                        "\nData limite: " + vagasDisponiveis[i].dataLimite +
                        "\nQuantidade de candidatos: " + vagasDisponiveis.length +
                        "\nNome candidatos " + vagasDisponiveis[i].nomeCandidato
                    )
                }
                

                break
            case "4":
                const candidatos = {}

                candidatos.nomeCandidato = prompt("Digite seu nome:")
                candidatos.indiceVaga = prompt("Qual o índice da vaga?")

                const confirmarCandidato = confirm(
                    "Salvar as informações:\n" +
                    "\nNome da Vaga: " + candidatos.nomeCandidato +
                    "\nIndice da vaga inscrita: " + candidatos.indiceVaga
                )

                if (confirmarCandidato) {
                    vagasDisponiveis.push(candidatos)
                } else {
                    alert("As informações do candidato estão diferentes")
                }

                break
            case "5":
                prompt("Digite o índice da vaga:")
                alert("Nome da vaga: " + nomeVaga +
                    "Descrição da vaga: " + descricaoVaga +
                    "Data Limite: " + dataLimite)
                //A opção de excluir uma vaga deve pedir o índice da vaga, mostrar suas informações e
                //pedir que o usuário confirme a exclusão da vaga antes de realmente exclui-la.
                break
            case "6":
                alert("Fechando o programa")
                break
            default:
                alert("Opcão inválida")
                break
        }
    } while (opcao !== "6");

}
executar()
