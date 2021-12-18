import React from 'react';
import Header from '../Shared/Header(fixed)/headerFixed';
import TopMenu from '../Shared/topMenu/index';
import ScheduleMain from './Components/Main';
import './schedule.css';
import Footer from '../Shared/Footer(fixed)/footerFixed';

class Schedule extends React.Component{
  render(){
    return (
      <div className="App">
          <Header/>
          <TopMenu/>
          <ScheduleMain />
          <Footer/>
      </div>
    )
  }
}

export default Schedule;