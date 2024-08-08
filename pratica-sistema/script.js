document.addEventListener("submit", function (e) {
  e.preventDefault();
});
var erro_msg = document.getElementById("error-message");
var senha = document.getElementById("password").value;
if (senha.lenght < 8) {
  erro_msg.textContent = "A senha precisa ter no minimo 8 caracteres";
} else {
  alert("certo");
}

var button = document.getElementById("submit");

button.addEventListener("click", function (e) {
  var login = document.getElementById("login");
  login.style.width = "100%";
  login.style.backgroundColor = "black";
  document.getElementById("form").style.backgroundColor = "red";
});

document.getElementById("mostraSenha").addEventListener("click", function (e) {
  const password = document.getElementById("password");
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  this.textContent = type === "password" ? "😃" : "😣";
});
