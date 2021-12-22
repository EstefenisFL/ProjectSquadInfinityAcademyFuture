import React, { Component } from "react";
import api from '../../../api';

class UserListMain extends React.Component{
        state= {
            persons: [],
        }
    
        async componentDidMount(){
            const response = await api.get('/v1/user/');
    
            this.setState({ persons: response.data});
        }
    render(){
        const { persons } = this.state;
        return (
            <main className='User-main'>
                <div className='User-Heading'>
                    <hr />
                    <h2>Lista de Usuários</h2>
                    <hr />
                </div>
                
               
                <div className="user">   
                <h1>List of Persons</h1> 
                {console.log(persons)}
                {persons.map(person =>(
                    <li key={person.id_user}>     
                        <h2>
                            <strong>Nome: </strong>
                            {person.user_nome}
                        </h2>
                        <p>
                            {person.user_endereco}
                        </p>
                    </li>
                ))}
                </div>
            </main>
        )
    }
}

export default UserListMain;