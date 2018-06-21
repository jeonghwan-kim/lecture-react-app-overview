import React, {Component} from 'react'
import './User.css'

class User extends Component {
  static defaultProps = {
    data: {
      id: 0,
      name: 'USER NAME',
      onDelete: () => console.log('NOP'),
      onEdit: () => console.log('NOP'),
    }
  }
  onEdit = e => {
    this.props.onEdit(this.props.data)
  }
  onDelete = e => {
    this.props.onDelete(this.props.data)
  }
  render() {
    const {id, name} = this.props.data
    return (
      <div className="User">
        <div className="User-id">{id}</div>
        <div className="User-name">{name}</div>
        <div className="User-controls">
          <ul>
            <li><button onClick={this.onEdit}>수정</button></li>
            <li><button onClick={this.onDelete}>삭제</button></li>
          </ul>
        </div>

      </div>
    )
  }
}

export default User
