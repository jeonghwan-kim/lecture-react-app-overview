import React from 'react'
import { connect } from 'react-redux'
import './EditUser.css'
import {editUser, setEditUser} from '../../reducers/user'

class EditUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ...this.props.user
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      ...this.state,
      ...nextProps.user
    })
  }
  onSubmit = e => {
    e.preventDefault()
    this.props.onSubmit(this.state)
    this.props.onCancel()
  }
  onChangeName = e => {
    this.setState({
      name: e.target.value
    })
  }
  onCancel = e => {
    e.preventDefault()
    this.props.onCancel()
  }
  render () {
    const {name} = this.state 
    const {id} = this.props.user

    return this.props.isEditing ? (
      <div className="EditUser">
        <div className="EditUser-modal-mask">
          <div className="EditUser-modal-wrapper">
            <div className="EditUser-modal-container">
              <form onSubmit={this.onSubmit}>
                <div>
                  <label>ID: {id}</label>
                </div>
                <div>
                  <label>이름:</label>
                  <input type="text" autoFocus autoComplete="off"
                    value={name} onChange={this.onChangeName} />
                </div>
                <div>
                  <button type="submit">저장</button>
                  <button onClick={this.onCancel}>취소</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    ) : ''
  }
}

const mapStateToPros = state => {
  return {
    isEditing: state.user.isEditing,
    user: state.user.editingUser
  }
}
const mapDispatchToPros = dispatch => {
  return {
    onSubmit: user => {
      dispatch(editUser(user))
    },
    onCancel: () => {
      dispatch(setEditUser(false))
    }
  }
}

export default connect(
  mapStateToPros, 
  mapDispatchToPros
)(EditUser)
