/* eslint-disable space-before-function-paren */
/* eslint-disable no-undef */
import { recipes } from '../data/recipes.js'
import { makeDOM } from './constructors/filtersListe.js'
import { makeTagButton } from './constructors/tagButtons.js'
import { makeRecipeCard } from './constructors/cards.js'

sortRecipes(recipes)
// const filteredRecipes = []

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

async function ListeIngredients(recettes) {
  const ingredientsArray = makeIngredientFiterButton(recettes)
  const ingredientsList = document.querySelector('.listeIngredients')
  ingredientsList.innerHTML = ''
  const DOMIngredients = await makeDOM(ingredientsArray, 'color1', ingredientsList)
  ingredientsList.appendChild(DOMIngredients)
}

async function ListeApareils(recettes) {
  const appliancesArray = makeApplianceFiterButton(recettes)
  const applianceList = document.querySelector('.listeApareils')
  applianceList.innerHTML = ''
  const DOMAppliances = await makeDOM(appliancesArray, 'color2', applianceList)
  applianceList.appendChild(DOMAppliances)
}

async function ListeUstensiles(recettes) {
  const ustensilsArray = makeUstensilFiterButton(recettes)
  const ustensilsList = document.querySelector('.listeUstensiles')
  ustensilsList.innerHTML = ''
  const DOMUstensiles = await makeDOM(ustensilsArray, 'color3', ustensilsList)
  applianceList.appendChild(DOMUstensiles)
}

function recipesCards(recettes) {
  const main = document.querySelector('main')
  main.innerHTML = ''
  for (let i = 0; i < recettes.length; i++) {
    makeRecipeCard(recettes[i])
  }
}

// Evenement 'change' sur inputBox
const searchZoneText = document.querySelector('#searchZoneTexte')
searchZoneText.addEventListener('input', () => {
  if (searchZoneText.value.length === 0) {
    init()
  }
  if (searchZoneText.value.length > 2) {
    const filteredRecipes = recipes.filter((valeur) => {
      if (valeur.description.includes(searchZoneText.value) || valeur.appliance.includes(searchZoneText.value)
      ) return true
    })

    sortRecipes(filteredRecipes)
    recipesCards(filteredRecipes)
    ListeIngredients(filteredRecipes)
    ListeApareils(filteredRecipes)
    ListeUstensiles(filteredRecipes)
    addEventsButtonsFilter()
  }
})

async function init() {
  ListeIngredients(recipes)
  ListeApareils(recipes)
  ListeUstensiles(recipes)
  addEventsButtonsFilter()
  recipesCards(recipes)
}

init()
