import React, { Component } from 'react';
import Item from './item';
import Lead from './lead';
import { NavLink, Link } from "react-router-dom";
import {Button} from 'semantic-ui-react'
import './index.css'

class TopMenu extends Component {

        constructor(props) {
            super(props)
        
            this.state = {
                menu_class: '',
            }
        }

        setToggleMenuClass = () =>{
            if(this.state.menu_class === ''){
                this.setState({
                    menu_class: 'toggled',
                })
            } else{
                this.setState({
                    menu_class: '',
                })
            }
        }
        
        render = () =>{
            let top_menu_class = `top-menu ${this.state.menu_class}`
            return (
                <div>
                    <div className = {top_menu_class}>
                        <Lead text=''></Lead>
                        <div className = 'left'>

                        <NavLink to="/">
                            <Item text='HOME'/>
                        </NavLink>

                        <NavLink to="/about">
                            <Item text='QUEM SOMOS'/>
                        </NavLink>

                        <NavLink to="/agendamento">
                            <Item text='AGENDE SEU HORÁRIO'/>
                        </NavLink>

                        <NavLink to='/contact'>
                            <Item text='CONTATO'/>
                        </NavLink>
                        </div>
                        <div className= 'right'>
                        <Link to="/login"><Button primary className = "Enviar" style={{marginLeft: "50vw", marginTop: "-3vw"}}>Login</Button>
                            </Link>
                        <NavLink to='/login'>
                            <Item text='LOGIN'/>
                        </NavLink>                    
                        </div>                 
                        <div className='clear-fix'/>
                    </div>
                </div>
        )
    }
}

export default TopMenu
