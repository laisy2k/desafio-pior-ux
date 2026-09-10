const formulario = document.getElementById("cadastroForm");
const telaSenha = document.getElementById("telaSenha");
const telaConfirmacao = document.getElementById("telaConfirmacao");
const finalizar = document.getElementById("finalizar");
const telaFinal = document.getElementById("telaFinal");
const telaCadastro = document.getElementById("telaCadastro");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    telaCadastro.style.display = "none";
    telaSenha.style.display = "block";
});

const continuarSenha = document.getElementById("continuarSenha");
const senha = document.getElementById("senha");

continuarSenha.addEventListener("click", function() {

    if (senha.value.length < 8) {
        alert("Erro: a senha precisa ter pelo menos 8 caracteres.");
        senha.value = "";
        return;
    }

    if (!/[A-Z]/.test(senha.value)) {
        alert("Erro: a senha precisa conter uma letra maiúscula.");
        senha.value = "";
        return;
    }

    if (!/[0-9]/.test(senha.value)) {
        alert("Erro: a senha precisa conter um número.");

        return;
    }

    alert("Senha aceita!");

    telaSenha.style.display = "none";
    telaConfirmacao.style.display = "block";
});

finalizar.addEventListener("click", function() {

    telaConfirmacao.style.display = "none";
    telaFinal.style.display = "block";

});

const cancelar = document.getElementById("cancelar");

cancelar.addEventListener("click", function() {
    alert("Cadastro realizado com sucesso!");
});

let vezesQueFugiu = 0;

continuarSenha.addEventListener("mouseover", function() {

    if (vezesQueFugiu < 2) {
        continuarSenha.style.position = "relative";

        continuarSenha.style.left =
            Math.floor(Math.random() * 200) + "px";

        continuarSenha.style.top =
            Math.floor(Math.random() * 100) + "px";

        vezesQueFugiu++;
    }

});