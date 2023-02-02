
// Gestion des événements des listes déroulantes de filtres
// let recipes = []

import { recipes } from 'data/recipes.js'
console.log(recipes)

function GestionBoutonFiltre(bouton, liste) {
  bouton.addEventListener('click', () => {
    if (liste.classList.contains('hidden')) {
      liste.classList.remove('hidden')
    } else {
      liste.classList.add('hidden')
    }
  })
}

function GestionClickItemListe(liste) {
  for (let i = 0; i < liste.length; i++) {
    liste[i].addEventListener('click', (e) => {
      e.preventDefault()
      console.log(liste[i].innerText)
    })
  }
}

const ingredients = document.querySelector('#ingredients')
const listeIngredients = document.querySelector('.listeIngredients')
const listItemsIngredients = document.querySelectorAll('.listeIngredients li')

GestionBoutonFiltre(ingredients, listeIngredients)
GestionClickItemListe(listItemsIngredients)

const ustensiles = document.querySelector('#ustensiles')
const listeUstensiles = document.querySelector('.listeUstensiles')
const listItemsUstensiles = document.querySelectorAll('.listeUstensiles li')

GestionBoutonFiltre(ustensiles, listeUstensiles)
GestionClickItemListe(listItemsUstensiles)

const apareils = document.querySelector('#apareils')
const listeApareils = document.querySelector('.listeApareils')
const listItemsApareils = document.querySelectorAll('.listeApareils li')

GestionBoutonFiltre(apareils, listeApareils)
GestionClickItemListe(listItemsApareils)

// async function init () {
//   const JSONFile = 'data/recipes.js'
//   // eslint-disable-next-line no-undef
//   recipes = await fetchJSON(JSONFile)
//   console.log(recipes)
// }

// init()
