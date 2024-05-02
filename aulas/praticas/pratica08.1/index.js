const readline = require('readline-sync');
const controlador = require('./controlador');

function exibirMenu() {
    console.log("AGENDA");
    console.log("1 - Consultar Contato");
    console.log("2 - Incluir Contato");
    console.log("3 - Atualizar Contato");
    console.log("4 - Remover Contato");
    console.log("5 - Sair");

}

async function escolherOpcao(opcao) {
    switch(opcao){
        case "1": {
            const nome = readline.question("Qual o nome do contato: ");
            const contato = await controlador.consultarContato(nome);
            console.log("Contato encontrado", contato);   
            break;
        }
        case "2": {
            const nome = readline.question("Qual o nome do contato: ")
            const email = readline.question("Qual e o email do contato: ");
            const telefone = readline.question("Qual o telefone do contato: ");
            const contato = await controlador.incluirContato(nome, email, telefone);
            console.log("Contato incluido", contato);   
            break;
        }
        case "3": {
            const nome = readline.question("Qual o nome do contato: ");
            const email = readline.question("Qual e o email do contato: ");
            const telefone = readline.question("Qual o telefone do contato: ");
            const contato = await controlador.atualizarContato(nome, email, telefone);
            console.log("Contato atualizado", contato);   
            break;
        }
        case "4": {
            const nome = readline.question("Qual o nome do contato: ");
            const contato = await controlador.removerContato(nome);
            console.log("Contato removido", contato);
            break;
        }
        case "5": process.exit();
        default: console.log("Opção invalida. Tente novamente.");
    }
}

async function main() {
    while(true){
        exibirMenu();
        const opcao = readline.question("Entre com uma opcao ");
        await escolherOpcao(opcao);
    }
}

main();