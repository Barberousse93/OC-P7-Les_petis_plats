/* eslint-disable indent */
/* eslint-disable space-before-function-paren */

export function makeTagButton(bouton) {
    return new Promise(resolve => {
        const tagZone = document.querySelector('#tagZone')
        //   const tagButton = await makeTagButton(liste[i].innerText, buttonColor)
        const tagButton = document.createElement('div')
        tagButton.classList.add('tag', bouton.classList[1])
        tagButton.innerText = bouton.innerText
        tagButton.setAttribute('data-index', bouton.getAttribute('data-index'))
        const closeImg = document.createElement('img')
        closeImg.classList.add('closeImg')
        closeImg.setAttribute('src', './assets/icones/suppr.png')
        tagButton.addEventListener('click', () => {
            const couleur = tagButton.classList[1]
            const index = tagButton.getAttribute('data-index')
            switch (couleur) {
                case 'color1': {
                    const listeIngredients = document.querySelectorAll('.listeIngredients li')
                    listeIngredients[index].classList.remove('hidden')
                    break
                }
                case 'color2': {
                    const listeApareils = document.querySelectorAll('.listeApareils li')
                    listeApareils[index].classList.remove('hidden')
                    break
                }
                case 'color3': {
                    const listeUstensiles = document.querySelectorAll('.listeUstensiles li')
                    listeUstensiles[index].classList.remove('hidden')
                    break
                }
            }
            tagButton.remove()
        })
        tagButton.appendChild(closeImg)
        tagZone.appendChild(tagButton)
    })
}
