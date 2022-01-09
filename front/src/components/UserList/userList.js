import React from 'react';
import Header from '../Shared/Header(fixed)/headerFixed';
import UserListMain from './components/UserListMain';
import TopMenu from '../Shared/topMenu/index'
import './userList.css';
import Footer from '../Shared/Footer(fixed)/footerFixed';

class UserList extends React.Component{
  render(){
    return (
      <div className="App">
          <Header/>
          <TopMenu/>
          <UserListMain/>
          <Footer/>
      </div>
    )
  }
}

export default UserList;