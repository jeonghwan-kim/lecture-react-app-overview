import {fetchUser as fetchUserApi} from '../api'

/**
 * Action types
 */

const REQEUST_USER = 'user/REQEUST_USER'
export const RECEIVE_USER = 'user/RECEIVE_USER'
export const ADD_USER = 'user/ADD_USER'
export const EDIT_USER = 'user/EDIT_USER'
export const SET_EDIT_USER = 'user/SET_EDIT_USER'
export const DELETE_USER = 'user/DELETE_USER'

/**
 * Actions creator
 */

export const fetchUserAsync = () => (dispatch) => {
  dispatch(requestUser())
  fetchUserApi()
    .then(users => {
      dispatch(receiveUser(users))
    })
}
const requestUser = () => ({ type: REQEUST_USER })
export const receiveUser = users => ({ type: RECEIVE_USER, users })
export const addUser = name => ({ type: ADD_USER, name })
export const editUser = user => ({ type: EDIT_USER, user })
export const setEditUser = (toggle, user) => ({ type: SET_EDIT_USER, toggle, user })
export const deleteUser = user => ({ type: DELETE_USER, user })

const initialSatate = {
  users: [
  ],
  isEditing: false,
  isFetching: false,
  editingUser: {
    id: 0,
    name: 'edited user'
  }
}

/**
 * Reducers
 */

export default (state = initialSatate, action) => {
  switch(action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [
          ...state.users, {
            id: state.users.length ? 
              state.users[state.users.length - 1].id + 1 : 
              1,
            name: action.name
          }
        ]
      }
    case EDIT_USER:
      return {
        ...state,
        users: state.users.map(user => {
          return user.id === action.user.id ? {...action.user} : user
        }),
        isEditing: false,
        editingUser: {}
      }
    case SET_EDIT_USER: 
      return {
        ...state,
        isEditing: action.toggle,
        editingUser: action.toggle ? action.user : {}
      }
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.user.id)
      }
    case REQEUST_USER: 
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_USER:
      return {
        ...state,
        users: action.users.map(user => ({...user})),
        isFetching: false
      }
    default:
      return state
  }
}