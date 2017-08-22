import { call, put, throttle } from 'redux-saga/effects'
import * as api from './api'
import * as actions from './actions'

export function* fetchSuggestions({ payload: { value } }) {
  try {
    const response = yield call(api.getCountries, value)
    yield put(actions.suggestions.success(value, response))
  } catch (error) {
    yield put(actions.suggestions.failure(value, error))
  }
}

export function* watchSuggestions() {
  yield throttle(300, 'FETCH_SUGGESTIONS_REQUEST', fetchSuggestions)
}

