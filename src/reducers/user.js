import { deleteUser as deleteUserApi } from '../api'

/**
 * Action types
 */

export const REQEUST_USER = 'user/REQEUST_USER'
export const FETCH_USER = 'user/FETCH_USER'
export const RECEIVE_USER = 'user/RECEIVE_USER'
export const ADD_USER = 'user/ADD_USER'
export const EDIT_USER = 'user/EDIT_USER'
export const SET_EDIT_USER = 'user/SET_EDIT_USER'
export const DELETE_USER = 'user/DELETE_USER'

/**
 * Actions creator
 */

export const fetchUser = _=> ({type: FETCH_USER})
export const requestUser = _=> ({type: REQEUST_USER})
export const receiveUser = users => ({type: RECEIVE_USER, users})
export const addUser = name => ({type: ADD_USER, name })
export const editUser = user => ({type: EDIT_USER, user})
export const setEditUser = (toggle, user) => ({type: SET_EDIT_USER, toggle, user})
export const deleteUser = ({id}) => dispatch => {
  deleteUserApi({id}).then(()=> {
    dispatch(fetchUser())
  })
}

/**
 * Reducers
 */

const initialState = {
  users: [],
  isEditing: false,
  isFetching: false,
  editingUser: {id: 0, name: 'edited user'}
}

export default (state = initialState, action) => {
  switch(action.type) {
    case SET_EDIT_USER: 
      return {
        ...state,
        isEditing: action.toggle,
        editingUser: action.toggle ? action.user : {}
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