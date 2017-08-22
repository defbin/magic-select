import suggestions from '../mocks/suggestions.json'

export function getSuggestions(value) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const rv = suggestions
        .filter(a => a.name.includes(value))
        .map(({ name, code }) => ({ label: name, value: code }))

      return resolve(rv)
    }, 600)
  })
}
