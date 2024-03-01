const readline = require("readline-sync");

const contatoControlador = require("./controlador");
const Contato = require("./modelo");

function menu() {
  console.log("1. Listar");
  console.log("2. Criar");
  console.log("3. Buscar");
  console.log("4. Atualizar");
  console.log("5. Remover");
  console.log("6. Sair");
}

function escolherOpcao(opcao) {
  switch (opcao) {
    case "1":
      contatos = contatoControlador.listarContatos();
      contatos.forEach((contato) => {
        console.log(contato);
      });
      break;
    case "2":
      nome = readline.question("Informe o nome: ");
      email = readline.question("Informe o email: ");
      telefone = readline.question("Informe o telefone: ");
      contatoControlador.adicionarContatos(nome, email, telefone);
      break;
    case "3":
      const nomeBuscar = readline.question("Informe o nome do contato: ");
      const contatoEncontrado = contatoControlador.buscarContato(nomeBuscar);
      if (contatoEncontrado) {
        console.log(contatoEncontrado);
      } else {
        console.log("Contato não encontrado");
      }
      break;
    case "4":
      const nomeAtualizar = readline.question("Informe o nome do contato: ");
      const contatoExistente = contatoControlador.buscarContato(nomeAtualizar);
      if (contatoExistente) {
        const novoEmail = readline.question("Informe o novo email: ");
        const novoTelefone = readline.question("Informe o novo nimero: ");
        contatoControlador.atualizarContato(
          nomeAtualizar,
          novoEmail,
          novoTelefone
        );
      } else {
        console.log("Contato não encontrado");
      }
      break;
    case "5":
      const nomeremover = readline.question("Informe o nome do produto: ");
        contatoControlador.removerContato(nomeremover);
      break;
    case "6":
      process.exit();
    default:
      console.log("Opção invalida");
  }
}

function main() {
  while (true) {
    menu();
    const opcao = readline.question("Entre com uma opcao: ");
    escolherOpcao(opcao);
  }
}

main();
