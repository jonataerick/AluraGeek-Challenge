import { conectaApi } from "./conectaApi.js";

const listaStar = document.querySelector("[data-lista-star]");

function constroiProduto() {
    const produto = document.createElement("li")
    produto.className("produtos__lista--item");
    produto.innerHTML = `<img src="assets/img/starwars/starwars1.png" alt="Produto 1 da parte Star Wars" class="produtos__lista--img">
    <h6 class="produtos__lista--titulo">Produto XYZ</h6>
    <p class="produtos__lista--preco">R$ 60,00</p>
    <a href="#" class="produtos__lista--link">Ver produto</a>`

    return produto;
}

async function listaProduto() {
    const lista = await conectaApi.listaProdutosStar();
    
}