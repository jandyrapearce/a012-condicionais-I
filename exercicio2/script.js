let idade = Number(prompt("Digite sua idade: "))
let isEnsinoMedio = prompt("Terminou o ensino médio? ")
let isCursandoFaculdade = prompt("Está cursando a faculdade? ")

if(idade >= 18){
    console.log("A pessoa é maior de idade")
}else{
	console.log("A pessoa é menor de idade")
}

if(isEnsinoMedio == "sim"){
    console.log("Terminou o Ensino Médio")
    isEnsinoMedio = typeof(Boolean)
    isEnsinoMedio = true
}else{
	console.log("Não Terminou o Ensino Médio")
    isEnsinoMedio = typeof(Boolean)
    isEnsinoMedio = false
}

if(isCursandoFaculdade == "sim"){
    console.log("Está cursando a Faculdade")
    isCursandoFaculdade = typeof(Boolean)
    isCursandoFaculdade = true
}else{
	console.log("Não está cursando a Faculdade")
    isCursandoFaculdade = typeof(Boolean)
    isCursandoFaculdade = false
}

