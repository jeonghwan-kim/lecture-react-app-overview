import React from 'react';
import User from './User';

class UserList extends React.Component {
  style = {
    marginBottom: '16px'
  }
  onDelete = data => {
    this.props.onDelete(data)
  }
  onEdit = data => {
    this.props.onEdit(data)
  }
  render () {
    const list = this.props.data.map(user => (
      <User data={user} key={user.id} 
        onDelete={this.onDelete} onEdit={this.onEdit}/>
    ))
    return (
      <div style={this.style}>
        {list}
      </div>
    )
  }
}

export default UserList;
