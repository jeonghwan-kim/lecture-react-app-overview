import { connect } from 'react-redux'
import UserList from '../components/Home/UserList'
import { setEditUser, deleteUser } from '../store/user'

const mapStateToProps = state => {
  return {
    users: state.user.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onEdit: user => {
      dispatch(setEditUser(true, user))
    },
    onDelete: user => {
      dispatch(deleteUser(user))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList)
