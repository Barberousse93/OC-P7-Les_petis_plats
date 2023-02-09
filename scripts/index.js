/* eslint-disable space-before-function-paren */
/* eslint-disable no-undef */
import { recipes } from '../data/recipes.js'
import { makeDOM } from './constructors/filtersListe.js'
import { makeTagButton } from './constructors/tagButtons.js'
import { makeRecipeCard } from './constructors/cards.js'

sortRecipes(recipes)

// Gestion des événements des listes déroulantes de filtres

function GestionBoutonFiltre(bouton, liste) {
  bouton.addEventListener('click', () => {
    const span = bouton.querySelector('span')
    if (liste.classList.contains('hidden')) {
      liste.classList.remove('hidden')
      span.classList.remove('dropdownIcone')
      span.classList.add('dropupIcone')
    } else {
      liste.classList.add('hidden')
      span.classList.add('dropdownIcone')
      span.classList.remove('dropupIcone')
    }
  })
}

async function GestionClickItemListe(liste) {
  for (let i = 0; i < liste.length; i++) {
    liste[i].addEventListener('click', (e) => {
      e.stopPropagation()
      liste[i].classList.add('hidden')
      makeTagButton(liste[i])
    })
  }
}

function addEventsButtonsFilter() {
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
}

async function ListeIngredients() {
  const ingredientsArray = makeIngredientFiterButton(recipes)
  const ingredientsList = document.querySelector('.listeIngredients')
  ingredientsList.innerHTML = ''
  const DOMIngredients = await makeDOM(ingredientsArray, 'color1', ingredientsList)
  ingredientsList.appendChild(DOMIngredients)
}

async function ListeApareils() {
  const appliancesArray = makeApplianceFiterButton(recipes)
  const applianceList = document.querySelector('.listeApareils')
  applianceList.innerHTML = ''
  const DOMAppliances = await makeDOM(appliancesArray, 'color2', applianceList)
  applianceList.appendChild(DOMAppliances)
}

async function ListeUstensiles() {
  const ustensilsArray = makeUstensilFiterButton(recipes)
  const ustensilsList = document.querySelector('.listeUstensiles')
  ustensilsList.innerHTML = ''
  const DOMUstensiles = await makeDOM(ustensilsArray, 'color3', ustensilsList)
  applianceList.appendChild(DOMUstensiles)
}

function recipesCards() {
  const main = document.querySelector('main')
  main.innerHTML = ''
  for (let i = 0; i < recipes.length; i++) {
    makeRecipeCard(recipes[i])
  }
}

async function init() {
  ListeIngredients()
  ListeApareils()
  ListeUstensiles()
  addEventsButtonsFilter()
  recipesCards()
}

init()
