if(JSON.parse(localStorage.getItem('lista').length == 0 )){
    var lista = []
    localStorage.setItem("lista", JSON.stringify(lista));
}

carregarCadastros()

var btn = document.querySelector("#btn_cadastrar")
btn.addEventListener("click", function(){
    let texto = document.querySelector("#tarefa")

        let getListaItens =  JSON.parse(localStorage.getItem("lista"));
        getListaItens.push(texto.value)
        localStorage.setItem("lista", JSON.stringify(getListaItens));


    texto.value = ""
    carregarCadastros()
    putFunctionClick()
})

putFunctionClick()
function putFunctionClick(){
    var allTask = document.querySelectorAll('input[type=checkbox]')
    for(let task of allTask){
        task.addEventListener('click', ()=>{
            if(task.checked==true){
                task.parentNode.style.textDecoration = 'line-through'
            }
            else{
                task.parentNode.style.textDecoration = 'none'
            }
        })
    }
}

function carregarCadastros() {
    let div = document.querySelector(".list")
    div.innerHTML = ""
    let getListaItens =  JSON.parse(localStorage.getItem("lista"));

    for(let [indice, valor] of getListaItens.entries())
    {
        div.innerHTML += `<label class=task_item><input type=checkbox><span class=checkmark></span>${valor}</label>`
        /*let paragrafo = document.createElement("p")
        paragrafo.textContent = valor
        paragrafo.setAttribute("data-indice", indice)
        div.appendChild(paragrafo)

        let btn = document.createElement("button")
        btn.textContent = "OK"
        btn.onclick = deletarTarefa
        paragrafo.appendChild(btn)*/
    }
}

function deletarTarefa()
{
    let pai = this.parentNode
    let indice = pai.getAttribute("data-indice")
    let getListaItens =  JSON.parse(localStorage.getItem("lista"));
    getListaItens.splice(indice, 1)
    localStorage.setItem("lista", JSON.stringify(getListaItens));

    carregarCadastros()
}