import React from 'react';
import Header from '../Shared/Header(fixed)/headerFixed';
import ContactMain from './Components/Main';
import TopMenu from '../Shared/topMenu/index'
import './contact.css';
import Footer from '../Shared/Footer(fixed)/footerFixed';

class Contact extends React.Component{
  render(){
    return (
      <div className="App">
          <Header/>
          <TopMenu/>
          <ContactMain/>
          <Footer/>
      </div>
    )
  }
}

export default Contact;