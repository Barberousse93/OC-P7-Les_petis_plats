
// tri croissant sur le titre de la recette //
export function sortRecipes (tableau) {
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
