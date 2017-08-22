import { createActions } from 'redux-actions'

const {
  fetchSuggestionsRequest,
  fetchSuggestionsSuccess,
  fetchSuggestionsFailure,
} = createActions({
  FETCH_SUGGESTIONS_REQUEST: value => ({ value }),
  FETCH_SUGGESTIONS_SUCCESS: (value, data) => ({ value, data }),
  FETCH_SUGGESTIONS_FAILURE: (value, error) => ({ value, error }),
})

export const suggestions = {
  request: fetchSuggestionsRequest,
  success: fetchSuggestionsSuccess,
  failure: fetchSuggestionsFailure,
}
