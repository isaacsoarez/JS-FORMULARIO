const para1 = document.querySelector(".p1");

para1.addEventListener("click", atualizarNome);

function atualizarNome() {
    var Nome= prompt("Insira um novo nome");
    para1.textContent = "Nome:" + Nome;
}
/*----------------------------------------------------*/
const para2 = document.querySelector(".p2");

para2.addEventListener("click", atualizarIdade);

function atualizarIdade() {
    var Idade= prompt("Insira uma nova idade");
    para2.textContent = "Idade:" + Idade;
}
/*----------------------------------------------------*/

const para3 = document.querySelector(".p3");

para3.addEventListener("click", atualizarCPF);

function atualizarCPF() {
    var cpf= prompt("Insira um novo CPF");
    para3.textContent = "cpf:" + cpf;
}
/*----------------------------------------------------*/
const para4 = document.querySelector(".p4");

para4.addEventListener("click", atualizarEmpresa);

function atualizarEmpresa() {
    var Empresa= prompt("Insira uma nova empresa");
    para4.textContent = "Empresa:" + Empresa;
}
/*----------------------------------------------------*/
const para5 = document.querySelector(".p5");

para5.addEventListener("click", atualizarSalario);

function atualizarSalario() {
    var salário= prompt("Insira um novo salário");
    para5.textContent = "salário:" + salário;
}