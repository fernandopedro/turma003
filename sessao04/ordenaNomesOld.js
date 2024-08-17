// ordene da maneira mais útil possível.
function ordena(listaDeNomes) {
    listaDeNomes.sort();
    const grupoTamanho = {};

    for(i = 0; i < listaDeNomes.length; i++){
        let tamanhoNome = listaDeNomes[i].length;

        if(grupoTamanho[tamanhoNome] === undefined){
            grupoTamanho[tamanhoNome] = [];
        }
        grupoTamanho[tamanhoNome].push(listaDeNomes[i])
    }
    return grupoTamanho;
}

console.log(ordena(["fernando", "afonso", "ravan", "bruno", "wilker", "italo", "christian"]));