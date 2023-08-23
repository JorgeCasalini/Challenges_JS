let fila = []
let opcao = ""

do {
  let pacientes = ""
  for (let i = 0; i < fila.length; i++) {
    pacientes += (i + 1) + "º - " + fila[i] + "\n"
  }

  opcao = prompt(
    "Pacientes:\n" + pacientes +
    "\nEscolha uma ação:\n1 - Novo paciente\n2 - Consultar paciente\n3 - Sair"
  )

  switch (opcao) {
    case "1":
      const novoPaciente = prompt("Qual é o nome do paciente?")
      fila.push(novoPaciente)
      break
    case "2":
      const pacienteConsultado = fila.shift()
      if (!pacienteConsultado) {
        alert("Não há pacientes na fila!")
      } else {
        alert(pacienteConsultado + " foi removido da fila.")
      }
      break
    case "3":
      alert("Encerrando...")
      break
    default:
      alert("Opção inválida!")
      break
  }
} while (opcao !== "3");
/*
const filaPaciente = []

let opcao = ""
let NomePaciente = ""

do {

    alert("Olá essa é o nome das pessoas em nossa fila de espera" + "\n" +filaPaciente)
    opcao = prompt(
        "\nEscolha uma opção!" +
        "\n1.Novo Paciente" +
        "\n2.Consultar Paciente" +
        "\n3.Sair"
    )

    switch (opcao) {
        case "1":
            let NovoPaciente = prompt("Digite o nome do paciente : \n")
            filaPaciente.push(NovoPaciente)
            break
        case "2":
            let pacienteConsultado = filaPaciente.shift()
            alert("O paciente " + pacienteConsultado + " foi consultado")
            break
        case "3":
            alert("Você encerrou")
            alert("até mais...")
            break
            default:
                alert("Opção Inválida")

    }

}while (opcao !== "3")
*/ 