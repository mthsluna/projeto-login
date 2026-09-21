const formCadastro = document.getElementById("cadastroForm");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const novaSenha = document.getElementById("novaSenha");
const confirmaSenha = document.getElementById("confirmaSenha");
const mensagemCadastro = document.getElementById("mensagemCadastro");

formCadastro.addEventListener("submit", (e) => {
  e.preventDefault();

  if (nome.value === "" || email.value === "" || novaSenha.value === "") {
    mensagemCadastro.style.color = "#ff5252";
    mensagemCadastro.textContent = "Preencha todos os campos!";
  } else if (novaSenha.value !== confirmaSenha.value) {
    mensagemCadastro.style.color = "#ff5252";
    mensagemCadastro.textContent = "As senhas não coincidem.";
  } else {
    mensagemCadastro.style.color = "#03dac6";
    mensagemCadastro.textContent = "Cadastro realizado com sucesso!";
  }
});