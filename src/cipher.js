/* const cipher = {
  // ...
};

export default cipher;
*/

// Pedir a mensagem e o deslocamento - depois trocar po caixa de texto e botão
let messageToEncode = String(prompt("O que você quer cifrar?"));
const offsetEncode = Number(prompt("Qual é a chave de deslocamento?"));


// Garantir que todo o texto está em letra maiúscula
messageToEncode = messageToEncode.toUpperCase();
let finalMessage = " ";

function encode (){

    //Condição inicial: 1o índice da string - JS lê string como array | Condição final: rodar o tamanho da string | Repetir para cada string    
    for (let i=0; i < messageToEncode.length; i++) {

        /* Criptografar
         Achar o código ASCII da letra - (diminuir por 65, código A) = código do alfabeto (0-25)
        Somar o deslocamento e garantir o giro no alfabeto (módulo tamnho do alfabeto)
        Somar novamente o código da primeira letra ASC (65) para o entendimento do JS
        Retorna r a string a partir do número do código
        */        
        const cipher = (messageToEncode.charCodeAt(i) - 65 + offsetEncode) % 26 + 65;
        finalMessage += String.fromCharCode(cipher);
    }
 }
encode ();

// Retornar o texto - Printar na tela
console.log (finalMessage);
