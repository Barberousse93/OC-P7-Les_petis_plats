/* eslint-disable space-before-function-paren */
import { recipes } from '../data/recipes.js'
import { makeRecipeCard } from './constructors/cards.js'
import { sortRecipes } from './utils/arrays.js'

// tri des recettes par odre croissant de nom
sortRecipes(recipes)

// JSON.parse(JSON.stringify(recipes) fait une copie EN PROFONDEUR du tableau recipes
let filteredRecipes = JSON.parse(JSON.stringify(recipes))

// Déclaration des variables globales
let filteredIngredients = []
let filteredAppliance = []
let filteredUstenils = []
const filterTags = {
  ing: [],
  app: [],
  ust: []
}
//* *********************************************************** *//
// Ajout des Event 'click' sur les entêtes de liste de filtres
const ingredientsButton = document.querySelector('#ingredients')
const ingredientsList = document.querySelector('#blocListeIngredients')
const spanIng = ingredientsButton.querySelector('span')
const applianceButton = document.querySelector('#apareils')
const appliancesList = document.querySelector('#blocLlisteApareils')
const spanApp = applianceButton.querySelector('span')
const ustensilsButton = document.querySelector('#ustensiles')
const ustensilsList = document.querySelector('#blocListeUstensiles')
const spanUst = ustensilsButton.querySelector('span')

// Afficher/masquer la liste des ingredients
ingredientsButton.addEventListener('click', () => {
  if (ingredientsList.classList.contains('hidden')) {
    ingredientsList.classList.remove('hidden')
    spanIng.classList.remove('dropdownIcone')
    spanIng.classList.add('dropupIcone')
  } else {
    ingredientsList.classList.add('hidden')
    spanIng.classList.add('dropdownIcone')
    spanIng.classList.remove('dropupIcone')
  }

  if (!appliancesList.classList.contains('hidden')) {
    appliancesList.classList.add('hidden')
    spanApp.classList.add('dropdownIcone')
    spanApp.classList.remove('dropupIcone')
  }
  if (!ustensilsList.classList.contains('hidden')) {
    ustensilsList.classList.add('hidden')
    spanUst.classList.add('dropdownIcone')
    spanUst.classList.remove('dropupIcone')
  }
})

// Afficher/masquer la liste des appareils
applianceButton.addEventListener('click', () => {
  if (appliancesList.classList.contains('hidden')) {
    appliancesList.classList.remove('hidden')
    spanApp.classList.remove('dropdownIcone')
    spanApp.classList.add('dropupIcone')
  } else {
    appliancesList.classList.add('hidden')
    spanApp.classList.add('dropdownIcone')
    spanApp.classList.remove('dropupIcone')
  }
  if (!ingredientsList.classList.contains('hidden')) {
    ingredientsList.classList.add('hidden')
    spanIng.classList.add('dropdownIcone')
    spanIng.classList.remove('dropupIcone')
  }
  if (!ustensilsList.classList.contains('hidden')) {
    ustensilsList.classList.add('hidden')
    spanUst.classList.add('dropdownIcone')
    spanUst.classList.remove('dropupIcone')
  }
})

// Afficher/masquer la liste des ustensiles
ustensilsButton.addEventListener('click', () => {
  if (ustensilsList.classList.contains('hidden')) {
    ustensilsList.classList.remove('hidden')
    spanUst.classList.remove('dropdownIcone')
    spanUst.classList.add('dropupIcone')
  } else {
    ustensilsList.classList.add('hidden')
    spanUst.classList.add('dropdownIcone')
    spanUst.classList.remove('dropupIcone')
  }
  if (!ingredientsList.classList.contains('hidden')) {
    ingredientsList.classList.add('hidden')
    spanIng.classList.add('dropdownIcone')
    spanIng.classList.remove('dropupIcone')
  }
  if (!appliancesList.classList.contains('hidden')) {
    appliancesList.classList.add('hidden')
    spanApp.classList.add('dropdownIcone')
    spanApp.classList.remove('dropupIcone')
  }
})
//* *********************************************************** *//

//* *********************************************************** *//
// Evenement 'change' sur inputBox du header
const searchZoneText = document.querySelector('#searchZoneTexte')
searchZoneText.addEventListener('input', () => {
  if (searchZoneText.value.length > 2) {
    filterRecipe(searchZoneText.value, filteredRecipes)
  } else {
    updateRecipes(filterTags)
  }
})
//* *********************************************************** *//

//* *********************************************************** *//
// Evenement input sur inputBox des listes filtre
const inputIng = document.querySelector('#inputIng')
inputIng.addEventListener('input', () => {
  if (inputIng.value.length > 2) {
    const tampon = []
    filteredIngredients.forEach((item) => {
      if (item.toUpperCase().match(inputIng.value.toUpperCase())) {
        tampon.push(item)
      }
    })
    // Creer la liste des ingredients
    const ingredientsList = document.querySelector('#listeIngredients')
    ingredientsList.innerHTML = ''

    for (let i = 0; i < tampon.length; i++) {
      const tagLI = document.createElement('div')
      tagLI.classList.add('itemListe', 'color1')
      tagLI.innerText = tampon[i]
      tagLI.addEventListener('click', (e) => {
        e.stopPropagation()
        if (!filterTags.ing.includes(tagLI.innerText)) {
          filterTags.ing.push(tagLI.innerText)
          filterRecipeByIngredient(tagLI.innerText, filteredRecipes)
          makeTagButton(tagLI)
        }
        inputIng.value = ''
      })
      ingredientsList.appendChild(tagLI)
    }
  }
})

const inputApp = document.querySelector('#inputApp')
inputApp.addEventListener('input', () => {
  if (inputApp.value.length > 2) {
    const tampon = []
    filteredAppliance.forEach((item) => {
      if (item.toUpperCase().match(inputApp.value.toUpperCase())) {
        tampon.push(item)
      }
    })
    // Creer la liste des apareils
    const applianceList = document.querySelector('#listeApareils')
    applianceList.innerHTML = ''

    for (let i = 0; i < tampon.length; i++) {
      const tagLI = document.createElement('div')
      tagLI.classList.add('itemListe', 'color2')
      tagLI.innerText = tampon[i]
      tagLI.addEventListener('click', (e) => {
        e.stopPropagation()
        if (!filterTags.app.includes(tagLI.innerText)) {
          filterTags.app.push(tagLI.innerText)
          filterRecipeByAppliance(tagLI.innerText, filteredRecipes)
          makeTagButton(tagLI)
        }
        inputApp.value = ''
      })
      applianceList.appendChild(tagLI)
    }
  }
})

const inputUst = document.querySelector('#inputUst')
inputUst.addEventListener('input', () => {
  if (inputUst.value.length > 2) {
    const tampon = []
    filteredUstenils.forEach((item) => {
      if (item.toUpperCase().match(inputUst.value.toUpperCase())) {
        tampon.push(item)
      }
    })
    // Creer la liste des ustensiles
    const ustensilsList = document.querySelector('#listeUstensiles')
    ustensilsList.innerHTML = ''

    for (let i = 0; i < tampon.length; i++) {
      const tagLI = document.createElement('div')
      tagLI.classList.add('itemListe', 'color3')
      tagLI.innerText = tampon[i]
      tagLI.addEventListener('click', (e) => {
        e.stopPropagation()
        if (!filterTags.ust.includes(tagLI.innerText)) {
          filterTags.ust.push(tagLI.innerText)
          filterRecipeByUstensil(tagLI.innerText, filteredRecipes)
          makeTagButton(tagLI)
        }
        inputUst.value = ''
      })
      ustensilsList.appendChild(tagLI)
    }
  }
})
//* *********************************************************** *//

//* *********************************************************** *//
// Bloquer la fermeture des listes si click hors l'input
const filterZoneInput = document.querySelectorAll('.filterZoneInput ')
filterZoneInput.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.stopPropagation()
  })
})
//* *********************************************************** *//

// Fitrer les ingrédients dans la liste en cours des recettes
// (filtre sur les tags)
function ListeIngredients(ListeRecettes) {
  filteredIngredients = []
  ListeRecettes.forEach((recette) => {
    recette.ingredients.forEach((item) => {
      if (!filteredIngredients.includes(item.ingredient)) {
        filteredIngredients.push(item.ingredient)
      }
    })
  })
  filteredIngredients = filteredIngredients.sort((a, b) => a.localeCompare(b, 'fr'))

  // Creer la liste des ingredients
  const ingredientsList = document.querySelector('#listeIngredients')
  ingredientsList.innerHTML = ''

  for (let i = 0; i < filteredIngredients.length; i++) {
    const tagLI = document.createElement('div')
    tagLI.classList.add('itemListe', 'color1')
    tagLI.innerText = filteredIngredients[i]
    tagLI.addEventListener('click', (e) => {
      e.stopPropagation()
      if (!filterTags.ing.includes(tagLI.innerText)) {
        filterTags.ing.push(tagLI.innerText)
        filterRecipeByIngredient(tagLI.innerText, ListeRecettes)
        makeTagButton(tagLI)
      }
    })
    ingredientsList.appendChild(tagLI)
  }
}

// Fitrer les apareils (appliance) dans la liste en cours des recettes
// (filtre sur tags)
function ListeApareils(ListeRecettes) {
  filteredAppliance = []
  ListeRecettes.forEach((recette) => {
    if (!filteredAppliance.includes(recette.appliance)) {
      filteredAppliance.push(recette.appliance)
    }
  })
  filteredAppliance = filteredAppliance.sort((a, b) => a.localeCompare(b, 'fr'))

  // Creer la liste des apareils
  const appliancesList = document.querySelector('#listeApareils')
  appliancesList.innerHTML = ''
  for (let i = 0; i < filteredAppliance.length; i++) {
    const tagLI = document.createElement('div')
    tagLI.classList.add('itemListe', 'color2')
    tagLI.innerText = filteredAppliance[i]
    tagLI.addEventListener('click', (e) => {
      e.stopPropagation()
      if (!filterTags.app.includes(tagLI.innerText)) {
        filterTags.app.push(tagLI.innerText)
        filterRecipeByAppliance(tagLI.innerText, ListeRecettes)
        makeTagButton(tagLI)
      }
    })
    appliancesList.appendChild(tagLI)
  }
}

// Fitrer les ustensiles dans la liste en cours des recettes
// (Filtre sur tags)
function ListeUstensiles(ListeRecettes) {
  filteredUstenils = []
  ListeRecettes.forEach((recette) => {
    recette.ustensils.forEach((item) => {
      if (!filteredUstenils.includes(item)) {
        filteredUstenils.push(item)
      }
    })
  })
  filteredUstenils = filteredUstenils.sort((a, b) => a.localeCompare(b, 'fr'))

  // Creer la liste des usensiles
  const ustensilsList = document.querySelector('#listeUstensiles')
  ustensilsList.innerHTML = ''
  for (let i = 0; i < filteredUstenils.length; i++) {
    const tagLI = document.createElement('div')
    tagLI.classList.add('itemListe', 'color3')
    tagLI.innerText = filteredUstenils[i]
    tagLI.addEventListener('click', (e) => {
      e.stopPropagation()
      if (!filterTags.ust.includes(tagLI.innerText)) {
        filterTags.ust.push(tagLI.innerText)
        filterRecipeByUstensil(tagLI.innerText, ListeRecettes)
        makeTagButton(tagLI)
      }
    })
    ustensilsList.appendChild(tagLI)
  }
}

// Créer les cartes des recettes
function recipesCards(ListeRecettes) {
  // Affichage du message si aucune recette ne correspond aux critères
  const message = document.querySelector('.message')
  if (ListeRecettes.length === 0) {
    message.classList.remove('hidden')
  } else {
    message.classList.add('hidden')
  }

  return new Promise(resolve => {
    const main = document.querySelector('main')
    main.innerHTML = ''
    for (let i = 0; i < ListeRecettes.length; i++) {
      makeRecipeCard(ListeRecettes[i])
    }
  })
}

// Filtre "global" sur le nom de la recette, les ingrédients et la description de la recette
function filterRecipe(findValue, listeRecettes) {
  filteredRecipes = listeRecettes.filter((recette) => recette.name.toUpperCase().includes(findValue.toUpperCase()) ||
    recette.ingredients.find((ing) => ing.ingredient.toUpperCase().includes(findValue.toUpperCase())) ||
    recette.description.toUpperCase().includes(findValue.toUpperCase()))

  recipesCards(filteredRecipes)
  ListeIngredients(filteredRecipes)
  ListeApareils(filteredRecipes)
  ListeUstensiles(filteredRecipes)
}

// Filtre uniquement sur les ingrédients
function filterRecipeByIngredient(findValue, listeRecettes) {
  filteredRecipes = listeRecettes.filter((recette) => recette.ingredients.find((ing) => ing.ingredient.toUpperCase().includes(findValue.toUpperCase())))

  recipesCards(filteredRecipes)
  ListeIngredients(filteredRecipes)
  ListeApareils(filteredRecipes)
  ListeUstensiles(filteredRecipes)
}

// Filtre uniquement sur les apareils
function filterRecipeByAppliance(findValue, listeRecettes) {
  filteredRecipes = listeRecettes.filter((recette) => recette.appliance.toUpperCase().includes(findValue.toUpperCase()))
  recipesCards(filteredRecipes)
  ListeIngredients(filteredRecipes)
  ListeApareils(filteredRecipes)
  ListeUstensiles(filteredRecipes)
}

// Filtre uniquement sur les ustensiles
function filterRecipeByUstensil(findValue, listeRecettes) {
  filteredRecipes = listeRecettes.filter((recette) => recette.ustensils.find((ust) => ust.toUpperCase().includes(findValue.toUpperCase())))
  recipesCards(filteredRecipes)
  ListeIngredients(filteredRecipes)
  ListeApareils(filteredRecipes)
  ListeUstensiles(filteredRecipes)
}

// Gestion des tags (boutons filtre) sur selection dans les listes ingrédients / apareils / ustensiles
function makeTagButton(bouton) {
  return new Promise(resolve => {
    const tagZone = document.querySelector('#tagZone')
    const tagButton = document.createElement('div')
    tagButton.classList.add('tag', bouton.classList[1])
    tagButton.innerText = bouton.innerText
    tagButton.setAttribute('data-index', bouton.getAttribute('data-index'))
    const closeImg = document.createElement('img')
    closeImg.classList.add('closeImg')
    closeImg.setAttribute('src', './assets/icones/suppr.png')
    tagButton.addEventListener('click', () => {
      const couleur = tagButton.classList[1]
      switch (couleur) {
        case 'color1': {
          // recherche de l'index du tag dans le tableau
          const index = filterTags.ing.indexOf(tagButton.innerText)
          // suppression de l'élément dans le tableau
          filterTags.ing.splice(index, 1)
          break
        }
        case 'color2': {
          // idem color1
          const index = filterTags.app.indexOf(tagButton.innerText)
          filterTags.app.splice(index, 1)
          break
        }
        case 'color3': {
          // idem color1
          const index = filterTags.ust.indexOf(tagButton.innerText)
          filterTags.ust.splice(index, 1)
          break
        }
      }
      tagButton.remove()
      updateRecipes(filterTags)
    })
    tagButton.appendChild(closeImg)
    tagZone.appendChild(tagButton)
  })
}

// Mise à jour du tableau des recettes.
function updateRecipes(tagArray) {
  const inputSearch = document.querySelector('#searchZoneTexte')
  // Si tous le champs de recherche est vide et aucun tag : Reinitialisation du tableau
  if (!tagArray.ing.length & !tagArray.app.length & !tagArray.ust.length & !inputSearch.value.length) {
    init()
  } else {
    // sinon, on repart du tableau d'origine et on applique les filtres successivement
    filteredRecipes = JSON.parse(JSON.stringify(recipes))
    // d'abord le filtre de l'inputbox si + de 2 caratères
    if (inputSearch.value.length > 2) {
      filterRecipe(inputSearch.value, filteredRecipes)
    } else {
      // puis chacun des filtres avancés si il y a des éléments sélectionnés.
      recipesCards(filteredRecipes)
      for (let i = 0; i < tagArray.ing.length; i++) {
        filterRecipeByIngredient(tagArray.ing[i], filteredRecipes)
      }
      for (let i = 0; i < tagArray.app.length; i++) {
        filterRecipeByAppliance(tagArray.app[i], filteredRecipes)
      }
      for (let i = 0; i < tagArray.ust.length; i++) {
        filterRecipeByUstensil(tagArray.ust[i], filteredRecipes)
      }
    }
  }
}

function init() {
  recipesCards(recipes)
  ListeIngredients(recipes)
  ListeApareils(recipes)
  ListeUstensiles(recipes)
}

// Point d'entrée
init()
