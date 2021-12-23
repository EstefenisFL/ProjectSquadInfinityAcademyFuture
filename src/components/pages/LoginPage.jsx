import React,{Component}from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../forms/LoginForm';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {login} from '../../actions/auth';
import './LoginPage.css';
import Header from '../Shared/Header(fixed)/headerFixed';
import TopMenu from '../Shared/topMenu';
import Footer from '../Shared/Footer(fixed)/footerFixed';

class LoginPage extends Component{

    constructor(props){
        super(props);
        this.submit=this.submit.bind(this);
    }

    submit=(data)=>{
        return this.props.login(data)
            .then(() => this.props.history.push("/"));
    }
    render(){
        return(
            <div>
                <div className='Login-Heading'>
                    <hr />
                    <h2>Login</h2>
                    <hr />
                </div>
                
                <div className = "Login-Page-Body">
                    <Header/>
                    <TopMenu/>
                    <Footer/>
                    <div className = "Login-Page-Head">
                    <h1 className = "Login-title">Login Page</h1>
                    <LoginForm submit={this.submit}/><br/>
                    <div className = "To-signup">Ainda não é cadastrado? <Link to="/signup">Cadastre-se aqui</Link></div>
                    </div>
                </div>
            </div>
        )
}
}
LoginPage.propTypes= {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    login: PropTypes.func.isRequired
}

export default connect(null, {login})(LoginPage);