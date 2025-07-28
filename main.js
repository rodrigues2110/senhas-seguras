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

function
