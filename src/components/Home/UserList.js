import React from 'react';
import User from './User';

class UserList extends React.Component {
  style = {
    marginBottom: '16px'
  }
  onEdit = user => {
    this.props.onEdit(user)
  }
  onDelete = user => {
    this.props.onDelete(user)
  }
  render () {
    const list = this.props.users.map(user => (
      <User data={user} key={user.id} onEdit={this.onEdit} 
        onDelete={this.onDelete}/>
    ))
    return (
      <div style={this.style}>
        {list}
      </div>
    )
  }
}

export default UserList
