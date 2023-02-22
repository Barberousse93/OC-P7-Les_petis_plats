// /* eslint-disable space-before-function-paren */
// /* eslint-disable indent */
/* eslint-disable no-unused-vars */

// tri croissant sur le titre de la recette //
function sortRecipes (tableau) {
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
