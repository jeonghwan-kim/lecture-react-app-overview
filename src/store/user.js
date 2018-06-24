/**
 * Action types
 */

export const FETCH_USER = 'user/FETCH_USER'
export const ADD_USER = 'user/ADD_USER'
export const EDIT_USER = 'user/EDIT_USER'
export const SET_EDIT_USER = 'user/SET_EDIT_USER'
export const DELETE_USER = 'user/DELETE_USER'

/**
 * Actions creator
 */

export const fetchUser = () => ({ type: FETCH_USER })
export const addUser = (name) => ({ type: ADD_USER, name })
export const editUser = (user) => ({ type: EDIT_USER, user })
export const setEditUser = (toggle, user) => ({ type: SET_EDIT_USER, toggle, user })
export const deleteUser = (user) => ({ type: DELETE_USER, user })

const initialSatate = {
  users: [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Blice' }
  ],
  isEditing: false,
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
    case FETCH_USER:
    default:
      return state
  }
}