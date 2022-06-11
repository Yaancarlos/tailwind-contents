let showIndice = (a) => {
    showContent(a)
}

function showContent(a) {
    let x = document.getElementById(`show-indice-${a}`)
    x.classList.toggle('hidden')
}