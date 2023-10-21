var lista = []

var btn = document.getElementById('cadastrartr')
btn.addEventListener('click', ()=>{
    let tarefa = document.querySelector('#tarefa')
    lista.push(tarefa.value)

    tarefa.value = ''

    carregarTarefas()
})

function carregarTarefas(){
    let cardContent = document.querySelector('.card-content')
    cardContent.innerHTML = ''

    for(let [index, tr] of lista.entries()){
        let p = document.createElement('p')
        p.textContent = tr
        p.setAttribute('class', 'item')
        p.setAttribute('data-index', index)

        let ok = document.createElement('button')
        ok.textContent = 'Ok'
        ok.onclick = deletarTarefa

        cardContent.append(p)
        p.append(ok)
    }
}

function deletarTarefa(){
    pai = this.parentNode
    index = pai.getAttribute('data-index')
    lista.splice(index, 1)

    carregarTarefas()
}