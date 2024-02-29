const readline = require("readline-sync");

function menu() {
  console.log("1. Listar");
  console.log("2. Criar");
  console.log("3. Buscar");
  console.log("4. Atualizar");
  console.log("5. Remover");
  console.log("6. Sair");
}

function escolheropção(opcao) {
  switch (opcao) {
    case "1":
      break;
    case "2":
      break;
    case "3":
      break;
    case "4":
      break;
    case "5":
      break;
    case "6":
      process.exit(0);
    default:
      console.log("Opção invalida");
  }
  readline.question("Pressione ENTER para continuar...")
}

function main() {
  while (true) {
    menu();
    const opcao = readline.question("Entre com uma opcao: ");
    escolheropção(opcao);
  }
}

main();
