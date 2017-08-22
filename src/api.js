const API_URL = 'https://restcountries.eu/rest/v2'

export function getCountries(name) {
  return fetch(`${API_URL}/name/${name}`)
    .then(res => res.json())
    .then((countries) => {
      return countries.map((country) => {
        return {
          label: country.name,
          value: country.numericCode,
          flag: country.flag,
        }
      })
    })
}
