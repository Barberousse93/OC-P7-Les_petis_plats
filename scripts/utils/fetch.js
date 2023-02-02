/* eslint-disable no-unused-vars */

async function fetchJSON (JSONFile) {
  try {
    let fetchData = []

    const res = await fetch(JSONFile)
    if (res.ok) {
      const data = await res.json()
      fetchData = data
    }
    return fetchData
  } catch (err) {
    console.log(err)
    return new Error(err)
  }
}
