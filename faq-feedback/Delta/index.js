
function clicar(){
    const conteudo = document.getElementsByClassName("conteudo")[0]
    const span = document.getElementsByClassName("seta")[0]
    if(conteudo.style.display == "none" && span.style.transform == "rotate(-90deg)"){
        conteudo.style.display = "block"
        span.style.transform = "rotate(0deg)"
    }
    else{
        conteudo.style.display = "none"
        span.style.transform = "rotate(-90deg)"
    }
}