const formulario = document.getElementById("cadastroForm");
const telaSenha = document.getElementById("telaSenha");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    formulario.style.display = "none";
    telaSenha.style.display = "block";
});