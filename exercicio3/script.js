const nacionalidade = prompt("Qual a sua nacionalidade? ").toLowerCase();

const nacionalidadeArr = ["brasileira", "argentina", "uruguaia", "chilena", "colombiana"]

if(nacionalidadeArr.includes(nacionalidade)) {
    console.log(nacionalidade)
} else {
    console.log("nacionalidade não encontrada")
}