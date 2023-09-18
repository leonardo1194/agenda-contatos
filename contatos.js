const form = document.getElementById('form-contato')
let linha
let contato = []

function abrirModal() {
    modal.style.display = "flex"
}

function fecharModal() {
    modal.style.display = "none"
}

form.addEventListener('submit', function(event) {
    event.preventDefault()

    eliminaPrimeiraLinha()
    adicionaLinha()
    atualizaLinha()
})

function adicionaLinha() {
    const nome = document.getElementById('nome')
    const tel = document.getElementById('telefone')
    const email = document.getElementById(('email'))

    if (contato.includes(nome.value)) {
        alert("O contato já existe")
        linha = ''
    } else {
        contato.push(nome.value)

        linha = `<tr>`
        linha += `<td>${nome.value}</td>`
        linha += `<td>${tel.value}</td>`
        linha += `<td>${email.value}</td`
        linha += `</tr>` 
        fecharModal()     
    }
    
    nome.value = ''
    tel.value = ''
    email.value = ''  

    console.log(contato)
}

function atualizaLinha() {
    const tabela = document.querySelector('tbody')
    tabela.innerHTML += linha
    
}

function eliminaPrimeiraLinha() {
    const agendaVazia = document.getElementById('agenda-vazia')
    agendaVazia.style.display = 'none'
}

const modal = document.getElementById("modal-container")