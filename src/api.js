import suggestions from '../mocks/suggestions.json'

export function getSuggestions(value) {
  const lowerCasedValue = value.toLowerCase()
  return new Promise((resolve) => {
    setTimeout(() => {
      const rv = suggestions
        .filter(a => a.name.toLowerCase().includes(lowerCasedValue))
        .map(({ name, code }) => ({ label: name, value: code }))

      return resolve(rv)
    }, 600)
  })
}
