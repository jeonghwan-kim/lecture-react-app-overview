import React from 'react'
import User from './User'

class UserList extends React.Component {
  style = {
    marginBottom: '16px'
  }
  componentDidMount() {
    this.props.fetch()
  }
  onEdit = user => {
    this.props.onEdit(user)
  }
  onDelete = user => {
    this.props.onDelete(user)
  }
  render () {
    const {isFetching} = this.props
    const list = this.props.users.map(user => (
      <User data={user} key={user.id} onEdit={this.onEdit} 
        onDelete={this.onDelete}/>
    ))
    return (
      <div style={this.style}>
        {list}
        {isFetching ? 'Loading...' : ''}
      </div>
    )
  }
}

export default UserList
