import React, {Component} from 'react';
import VisibleUserList from '../../containers/VisibleUserList';
import AddUser from '../../containers/AddUser';
import EditUser from '../../containers/EditUser';

class Home extends Component {
  render () {
    return (
      <div>
        <h2>사용자 관리</h2>
        <VisibleUserList />
        <AddUser />
        <EditUser />
      </div>
    )
  }
}

export default Home
