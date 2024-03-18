export function addClass(rota){
    const [_, page] = rota.split('/')

    const htmlClass = document.documentElement.classList.length

    if(htmlClass >= 1){
        document.documentElement.classList.value = ''
        document.documentElement.classList.add(page)
    }
}