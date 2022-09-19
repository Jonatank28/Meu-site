const btn = document.querySelector('#btn')

function btnClicado(){
    const menu = document.querySelector('.menu')
    menu.classList.toggle('ativo')
}

btn.addEventListener('click', btnClicado)