var contador = 1;
document.getElementById("mais_produtos").addEventListener("click", function () {
  contador++;
  console.log(contador);
  var new_row = document.createElement("div");
  new_row.className = "form-group";

  new_row.innerHTML = `
    <label>Produto ${contador}</label>
          <input
            type="text"
            name="produto[]"
            class="produto"
            id="produto${contador}"
            placeholder="Digite o nome do produto"
          />
          <input
            type="text"
            name="valor_produto[]"
            class="produto"
            id="valor_produto${contador}"
            placeholder="Digite o valor do produto"
          />
        <img src="/images/lixeira.jpeg" class="remover" width="20" id="remover">
        </div>
        <div id="produtos_adicionais"></div>
        <br />
  `;
  document.getElementById("produtos_adicionais").appendChild(new_row);
});

document.getElementById('produtos_adicionais').addEventListener('click', function (event) {
  if (event.target.classList.contains("remover")) {
    event.target.parentElement.remove(--contador);
  }
})
