import React from 'react';

const User = ({data}) => (
  <div>
    {data.id} - {data.name}
  </div>
)
User.defaultProps = {
  id: 0,
  name: 'USER NAME'
}

const UserList = ({data}) => (
  data.map(user => <User data={user} key={user.id} />)
)


class Home extends React.Component {
  state = {
    users: [
      {id: 1, name: 'Alice'},
      {id: 2, name: 'Beck'},
      {id: 3, name: 'Chris'},
    ]
  }
  render () {
    return (
      <div>
        <h2>사용자 관리</h2>
        <UserList data={this.state.users} />
      </div>
    )
  }
}

export default Home;
