import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'

const suggestions = handleActions({
  FETCH_SUGGESTIONS_REQUEST: (state) => ({ ...state, isLoading: true }),
  FETCH_SUGGESTIONS_SUCCESS: (state, { payload: { data = [] } }) => ({ ...state, isLoading: false, data }),
  FETCH_SUGGESTIONS_FAILURE: (state, { payload: { error } }) => ({ ...state, isLoading: false, error }),
}, {
  data: [],
  isLoading: false,
  error: null,
})

export default combineReducers({
  suggestions,
})
