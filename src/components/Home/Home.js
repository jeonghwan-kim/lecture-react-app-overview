import React, {Component} from 'react';
import {fetchUser, createUser, deleteUser, updateUser} from '../../api';
import UserList from './UserList';
import UserAddForm from './UserAddForm';
import UserEditForm from './UserEditForm';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isEdit: false,
      willEditedUser: null
    }
    this.fetchUser()
  }
  onAdd = data => {
    createUser({name: data.inputName})
      .then(this.fetchUser)
  }
  onDelete = ({id}) => deleteUser(id).then(this.fetchUser);
  onEdit = data => {
    this.setState({
      isEdit: true,
      willEditedUser: data
    })
  }
  onEdited = data => {
    this.onCancelEdit()
    updateUser(data).then(this.fetchUser)
  }
  onCancelEdit = _=> {
    this.setState({
      isEdit: false, 
      willEditedUser: null
    })
  }
  fetchUser = () => fetchUser().then(users => this.setState({users}))
  render () {
    return (
      <div>
        <h2>사용자 관리</h2>
        <UserList data={this.state.users} 
          onDelete={this.onDelete} onEdit={this.onEdit}/>
        <UserAddForm onAdd={this.onAdd}/>
        { 
          this.state.isEdit && 
          <UserEditForm 
            data={ this.state.willEditedUser }
            onSubmit= { this.onEdited }
            onCancel={ this.onCancelEdit } /> 
        } 
      </div>
    )
  }
}

export default Home;
