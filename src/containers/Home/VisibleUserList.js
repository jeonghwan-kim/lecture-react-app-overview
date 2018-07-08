import { connect } from 'react-redux'
import UserList from '../../components/Home/UserList'
import { setEditUser, deleteUser, fetchUser } from '../../reducers/user'

const mapStateToProps = state => {
  return {
    users: state.user.users,
    isFetching: state.user.isFetching
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onEdit: user => dispatch(setEditUser(true, user)),
    onDelete: user => dispatch(deleteUser(user)),
    fetch: _=> dispatch(fetchUser())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList)
