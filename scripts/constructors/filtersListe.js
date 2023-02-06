/* eslint-disable indent */
/* eslint-disable space-before-function-paren */

export function makeDOM(tableau, color, tagUL) {
    return new Promise(resolve => {
        // const tagUL = document.querySelector('.listeIngredients')
        for (let i = 0; i < tableau.length; i++) {
            const tagLI = document.createElement('li')
            tagLI.classList.add('itemListe', color)
            tagLI.innerText = tableau[i]
            tagLI.setAttribute('data-index', i)
            tagUL.appendChild(tagLI)
        }
    })
}
