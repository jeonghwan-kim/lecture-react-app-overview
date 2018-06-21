import React from 'react';
import './UserEditForm.css';

class UserEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.data.id,
      name: props.data.name
    }
  }
  onSubmit = e => {
    e.preventDefault()
    this.props.onSubmit(this.state)
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
    const {id, name} = this.state
    return (
      <div className="UserEditForm">
        <div className="UserEditForm-modal-mask">
          <div className="UserEditForm-modal-wrapper">
            <div className="UserEditForm-modal-container">
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
    ) 
  }
}

export default UserEditForm;
