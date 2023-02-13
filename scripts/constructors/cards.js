/* eslint-disable space-before-function-paren */
export function makeRecipeCard(recette) {
  const main = document.querySelector('main')
  const card = document.createElement('article')
  card.classList.add('card')
  const cadre = document.createElement('div')
  cadre.classList.add('cadre')
  card.appendChild(cadre)
  const recipe = document.createElement('div')
  recipe.classList.add('recipe')
  card.appendChild(recipe)
  const recipeHeader = document.createElement('div')
  recipeHeader.classList.add('recipeheader')
  recipe.appendChild(recipeHeader)
  const recipeTitle = document.createElement('div')
  recipeTitle.classList.add('recipetitle')
  recipeTitle.innerText = recette.name
  recipeHeader.appendChild(recipeTitle)
  const recipeTime = document.createElement('div')
  recipeTime.classList.add('recipetime')
  recipeTime.innerText = recette.time + 'mn'
  recipeHeader.appendChild(recipeTime)
  const recipeDetail = document.createElement('div')
  recipeDetail.classList.add('recipedetail')
  recipe.appendChild(recipeDetail)
  const recipeIngredients = document.createElement('div')
  recipeIngredients.classList.add('recipeingredients')
  recipeDetail.appendChild(recipeIngredients)
  const table = document.createElement('table')
  recipeIngredients.appendChild(table)
  const tableBody = document.createElement('tbody')
  table.appendChild(tableBody)
  for (let i = 0; i < recette.ingredients.length; i++) {
    const tabLine = document.createElement('tr')
    tableBody.appendChild(tabLine)
    const cell1 = document.createElement('td')
    cell1.classList.add('recipeingredient')
    cell1.innerText = recette.ingredients[i].ingredient + ' : '
    tabLine.appendChild(cell1)
    const cell2 = document.createElement('td')
    if (recette.ingredients[i].quantity) {
      cell2.classList.add('quantite')
      let quantite = recette.ingredients[i].quantity
      if (recette.ingredients[i].unit) {
        quantite = quantite + ' ' + recette.ingredients[i].unit
      }
      cell2.innerText = quantite
    }
    tabLine.appendChild(cell2)
  }
  const recipeDescription = document.createElement('div')
  recipeDescription.classList.add('recipedescription')
  recipeDescription.innerText = recette.description
  recipeDetail.appendChild(recipeDescription)
  main.appendChild(card)
}
