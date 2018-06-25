import { connect } from 'react-redux'
import UserList from '../components/Home/UserList'
import { setEditUser, deleteUser, fetchUserAsync } from '../store/user'

const mapStateToProps = state => {
  return {
    users: state.user.users,
    isFetching: state.user.isFetching
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onEdit: user => {
      dispatch(setEditUser(true, user))
    },
    onDelete: user => {
      dispatch(deleteUser(user))
    },
    fetch: () => {
      dispatch(fetchUserAsync())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList)
