/* eslint-disable space-before-function-paren */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */

function makeIngredientFiterButton(tableau) {
    const rowArray = []
    for (let i = 0; i < tableau.length; i++) {
        for (let j = 0; j < tableau[i].ingredients.length; j++) {
            rowArray.push(tableau[i].ingredients[j].ingredient)
        }
    }
    const sortedIngredientsArray = makeFilterListe(rowArray)
    return sortedIngredientsArray
}

function makeApplianceFiterButton(tableau) {
    const rowArray = []
    for (let i = 0; i < tableau.length; i++) {
        rowArray.push(tableau[i].appliance)
    }
    const sortedAppliancesArray = makeFilterListe(rowArray)
    return sortedAppliancesArray
}

function makeUstensilFiterButton(tableau) {
    const rowArray = []
    for (let i = 0; i < tableau.length; i++) {
        for (let j = 0; j < tableau[i].ustensils.length; j++) {
            rowArray.push(tableau[i].ustensils[j])
        }
    }
    const sortedUstensilsArray = makeFilterListe(rowArray)
    return sortedUstensilsArray
}

function makeFilterListe(tableau) {
    const noDuplicateArray = [...new Set(tableau)]

    const sortedArray = noDuplicateArray.sort()

    return sortedArray
}

function sortRecipes(tableau) {
    tableau.sort((a, b) => {
        if (a.name > b.name) {
            return 1
        }
        if (a.name < b.name) {
            return -1
        }
        return 0
    })
}
