function Info(x){
    let informacao = document.getElementsByClassName("conteudo")[x]
    let seta = document.getElementsByClassName("seta")[x]
    let titulo = document.getElementsByClassName("titulo")[x]
    if(informacao.style.display == "none" && seta.style.transform == "rotate(180deg)"){
        informacao.style.display = "block"
        seta.style.transform = "rotate(0deg)"
        titulo.style.fontWeight = "900"
    }
    else{
        informacao.style.display = "none"
        seta.style.transform = "rotate(180deg)"
        titulo.style.fontWeight = "350"
    }
} 