import React, {Component} from 'react';
import VisibleUserList from '../../containers/Home/VisibleUserList';
import AddUser from '../../containers/Home/AddUser';
import EditUser from '../../containers/Home/EditUser';

class Home extends Component {
  render () {
    return (
      <div>
        <h2>User Management</h2>
        <VisibleUserList />
        <AddUser />
        <EditUser />
      </div>
    )
  }
}


export default Home
