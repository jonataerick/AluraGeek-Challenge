async function listaProdutosStar() {
    const conexao = await fetch('http://localhost:3000/starWars');
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

export const conectaApi = {
    listaProdutosStar;
}