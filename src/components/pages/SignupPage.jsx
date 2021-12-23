import React,{Component}from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {setBaseUrl} from '../../actions/auth';
import Header from '../Shared/Header(fixed)/headerFixed';
import TopMenu from '../Shared/topMenu';
import SignupForm from '../forms/SignupForm';
import './SignupPage.css';
import Footer from '../Shared/Footer(fixed)/footerFixed';
import api from '../../api';

class SignupPage extends Component{

    constructor(props){
        super(props);
        this.submit=this.submit.bind(this);

    }

    submit = (data) =>{
        console.log("Teste de objeto", data);
         api.actions.createUser(data);
    }

    render(){
        return(
            <div>
                <div className='Signup-Heading'>
                        <hr />
                        <h2>Signup</h2>
                        <hr />
                </div>
                <div className="Signup-main">
                    <Header/>
                    <TopMenu/>
                    <Footer/>
                    <div className ="Signup-Content">
                    <h1 style = {{marginLeft: "60vw"}}>Cadastro</h1>
                    <SignupForm submit={this.submit}/><br/>
                    <div style = {{marginLeft: "58vw"}}>Already have an account? <Link to="/login">Login here</Link></div>
                    </div>
                </div>
            </div>
        )
    }
}
SignupPage.propTypes= {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    signup: PropTypes.func.isRequired
}

export default SignupPage;
