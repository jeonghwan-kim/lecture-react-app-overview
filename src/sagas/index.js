import {takeEvery, call, put} from 'redux-saga/effects'
import {FETCH_USER, RECEIVE_USER, REQEUST_USER} from '../store/user'
import {fetchUser as fetchUserApi} from '../api'

export function* helloSaga() {
  console.log('Hello Sagas!')
}

export function* takeFetchUser() {
  yield takeEvery(FETCH_USER, fetchUserAsync)
}
function* fetchUserAsync(action) {
  yield put({type: REQEUST_USER})
  const users = yield call(fetchUserApi)
  yield put({type: RECEIVE_USER, users})
}

export default function* rootSaga() {
  yield [
    helloSaga(),
    takeFetchUser()
  ]
}