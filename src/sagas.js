import { call, put, takeLatest } from 'redux-saga/effects'
import * as api from './api'
import * as actions from './actions'

export function* fetchSuggestions({ payload: { value } }) {
  try {
    const response = yield call(api.getSuggestions, value)
    yield put(actions.suggestions.success(value, response))
  } catch (error) {
    yield put(actions.suggestions.failure(value, error))
  }
}

export function* watchSuggestions() {
  yield takeLatest('FETCH_SUGGESTIONS_REQUEST', fetchSuggestions)
}

