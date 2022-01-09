import React from 'react';
import Header from '../Shared/Header(fixed)/headerFixed'
import MainBody from './MainBody/mainBody';
import TopMenu from '../Shared/topMenu/index'
import './about.css';
import Footer from '../Shared/Footer(fixed)/footerFixed';

class About extends React.Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <TopMenu/>
        <MainBody />
        <Footer/>
      </div>
    );
}
}

export default About;
