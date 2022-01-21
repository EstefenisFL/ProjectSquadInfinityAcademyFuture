import React from "react";
import {Form,Button} from 'semantic-ui-react';
import api from '../../../api';
import {setBaseUrl} from '../../../actions/auth';

class UserListMain extends React.Component{
    constructor(props){
        super(props);    
        this.state= {
            persons: [],
        },
        this.getUser=this.getUser.bind(this);
    }
        
        async getUser() {
            const response = await api.actions.getAllUsers(); 
            this.setState({ persons: response});
            console.log(response.data);
        }

        

    render(){
        const { persons } = this.state;
        return (
            <div className='User-main'>
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
                <Button onClick={this.deleteUser} value = "6" primary style = {{marginLeft: "7vw"}}>Listar</Button>
                </div>
            </div>
        )
    }
}

export default UserListMain;