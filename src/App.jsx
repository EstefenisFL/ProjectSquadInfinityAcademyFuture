import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import LoginPage from "./components/pages/LoginPage"

import UserRoute from "./components/pageroutes/UserRoute"
import GuestRoute from "./components/pageroutes/GuestRoute"

import SignupPage from "./components/pages/SignupPage";
import NavBar from './components/misc/Navigation';
import UserList from './components/UserList/userList';

import About from './components/About/about';
import Schedule from './components/Schedule/schedule'
import Contact from './components/Contact/contact';
import MainBody from './components/HomePage/MainBody/mainBody';


// const ThreadAndNavbar = () => {
//     return(
        
//     );
// }


// const HistoryAndNavbar = () => {
//     return(
//         <div style={{marginLeft: "25vw"}}>
//             <NavBar/>
//             <HistoryPage />
//         </div>
//     );
// }

const App =({location,isAuthenticated}) => (
        <div className="normal-page">
            {console.log(location)}
            <GuestRoute location={location} path="/" exact component={MainBody} />
            <GuestRoute location={location} path="/about" exact component={About} />
            <GuestRoute location={location} path="/schedule" exact component={Schedule} />           
            <GuestRoute location={location} path="/contact" exact component={Contact} />
            <GuestRoute location={location} path="/userlist" exact component={UserList} />

            {/* <UserRoute location={location} path="/home" exact component={MainBody} />
            <UserRoute location={location} path="/about" exact component={About} />
            <UserRoute location={location} path="/faculty" exact component={Faculty} />
            <UserRoute location={location} path="/announcement" exact component={Announcement} />
            <UserRoute location={location} path="/opportunity" exact component={Opportunity} />
            <UserRoute location={location} path="/society" exact component={Society} /> */}
            <div className="ui-container">
                
                <GuestRoute location={location} path="/login" exact component={LoginPage}/>
                <GuestRoute location={location} path="/signup" exact component={SignupPage}/>
            </div>
            
        </div> 
);

App.propTypes ={
    location:PropTypes.shape({
        pathname:PropTypes.string.isRequired
    }).isRequired,
    isAuthenticated:PropTypes.bool.isRequired
}
function mapStateToProps(state){
    return{
        isAuthenticated: !!state.user.token
    }

}
export default connect(mapStateToProps)(App);
