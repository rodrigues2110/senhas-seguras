const numeroSenha = document.queryselecto('.parametro-senha__texto');
let tamanhosenha = 12;
numeroSenha. textcontent = tamanhoSenha
const letrasMaiuculas = 'ABCDEFGHIJKMNOPQRSTUVXYWZ';
const letrasMinusculas = 'abcdefghijkmnopqrstuvxywz';
const numeros = '0123456789';
const simbolos = '!@%*?';
const botoes = document.querySelectorAll('.parametro-senha__botao');
const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll('checkbox');
const forcaSenha = document.querySelector('.forca');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho() {
    if (tamanhosenha > 1)
        // tamanhoSenha = tamanhoSenha+1;
        tamanhoSenha--;
    }
    numeroSenha.textcontent = tamanhoSenha;
    geraSenha();
}
function aumentaTamanho() {
    if (tamanhosenha) {
    //tamanhoSenha = tamanhoSenha+1;
    tamanhosenha++;
    }
    numeroSenha.textcontent = tamanhosenha;
    geraSenha();
}

for (i = 0; i < checkbox.length; i++) {
    checkbox[i].onclick = geraSenha;
}

geraSenha();

function geraSenha() {
    let alfabeto = '';
    if (checkbox[0].checked) {
        alfabeto = alfabeto + letrasMaiusculas;
    }
    if (checkbox[1].checked) {
        alfabeto = alfabeto + letrasMinusculas;
    }
    if (checkbox[2].checked) {
        alfabeto = alfabeto + numeros;
    }
    if (checkbox[3].checked) {
        alfabeto = alfabeto + simbolos;
    }
    let senha = '';
    for (let i = 0; i < tamanhoSenha; i++) {
        let numeroAleatorio = Math.random() * alfabeto.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + alfabeto[numeroAleatorio];
    }
    campoSenha.value = senha;
    classificaSenha(alfabeto.length);

}

function classificaSenha(tamanhoAlfabeto) {
    let entropia = tamanhoSenha * Math.log2(tamanhoAlfabeto);
    console.log(entropia);
    forcaSenha.classList.remove('fraca', 'media', 'forte');
    if (entropia > 57) {
        forcaSenha.classList.add('forte');
    } else if (entropia > 35 && entropia < 57) {
        forcaSenha.classList.add('media');
    } else if (entropia <= 35) {
        forcaSenha.classList.add('fraca');
    }
    const valorEntropia = document.querySelector('.entropia');
    valorEntropia.textContent = "Um computador pode levar até " + Math.floor(2 ** entropia / (100e6 * 60 * 60 * 24)) + " dias para descobrir essa senha.";
}





