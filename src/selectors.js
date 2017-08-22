import { createSelector } from 'reselect'

const suggestionsSelector = state => state.suggestions
const suggestionsDataSelector = createSelector(suggestionsSelector, state => state.data)
const isLoadingSelector = createSelector(suggestionsSelector, state => state.isLoading)

export const suggestions = {
  suggestions: suggestionsDataSelector,
  isLoading: isLoadingSelector
}
