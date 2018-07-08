import {takeEvery, call, put} from 'redux-saga/effects'
import {
  FETCH_USER, RECEIVE_USER, REQEUST_USER, ADD_USER, EDIT_USER
} from '../reducers/user'
import * as api from '../api'

function* takeFetchUser() {
  yield takeEvery(FETCH_USER, fetchUserAsync)
}
function* fetchUserAsync(action) {
  yield put({type: REQEUST_USER})
  const users = yield call(api.fetchUser)
  yield put({type: RECEIVE_USER, users})
}

function* takeAddUser() {
  yield takeEvery(ADD_USER, function* (action) {
    yield call(api.createUser, {name: action.name})
    yield fetchUserAsync()
  }) 
}

function* takeEditUser() {
  yield takeEvery(EDIT_USER, function* (action) {
    yield call(api.updateUser, {...action.user})
    yield fetchUserAsync()
  }) 
}

export default function* rootSaga() {
  yield [
    takeFetchUser(),
    takeAddUser(),
    takeEditUser()
  ]
}