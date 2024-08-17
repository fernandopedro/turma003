// ordene da maneira mais útil possível.
function ordena(listaDeNomes) {
    listaDeNomes.sort();
    const grupoTamanho = {};

    for (nome of listaDeNomes){
        let tamanhoNome = nome.length;

        if (!grupoTamanho[tamanhoNome]){
            grupoTamanho[tamanhoNome] = [];
        }
        grupoTamanho[tamanhoNome].push(nome);
    }
    return grupoTamanho;
}
let resultado = ordena(["fernando", "afonso", "ravan", "bruno", "wilker", "italo", "christian"]);
console.log(resultado);