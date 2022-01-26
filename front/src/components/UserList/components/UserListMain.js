import React from "react";
import {Form,Button} from 'semantic-ui-react';
import api from '../../../api';
import {setBaseUrl} from '../../../actions/auth';

class UserListMain extends React.Component{
    constructor(props){
        super(props);    
        this.state= {
            value:'',
            valueToUse:0,
            persons: [],
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getUser = this.getUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.updateUser = this.updateUser.bind(this);
    }

        handleChange(event){
            this.setState({value: event.target.value});
            this.valueToUse = 0;
            if(this.valueToUse !== parseInt(event.target.value)){
                this.valueToUse = parseInt(event.target.value);
            }else{
                this.valueToUse = 0;
            }  
        }

        handleSubmit(event) {
            alert('O usuário foi deletado com sucesso');
            event.preventDefault();
        }
        
        async getUser() {
            const response = await api.actions.getAllUsers(); 
            this.setState({ persons: response});
            console.log(response.data);
        }
        async deleteUser() {
            await api.actions.deleteUser(this.valueToUse);
        }
        async updateUser(id, data) {
            const response = await api.actions.updateUser(id, data); 
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
                    <form onSubmit={this.handleSubmit}>
                    <li key={person.id_user}>     
                        <h2>
                        <strong>
                            <input type="checkbox" id="scales" name="scales" value={person.id_user} onChange={this.handleChange}/>
                                Nome: </strong>
                            {person.user_nome}
                        </h2>
                        <p>
                            {person.user_endereco}
                        </p>
                    </li>
                    </form>
                    
                ))}
                
                <Button onClick={this.getUser} primary >Listar</Button>
                <Button onClick={this.updateUser} primary >Editar</Button>
                <Button onClick={this.deleteUser} color="red" >Deletar</Button>
                </div>
            </div>
        )
    }
}

export default UserListMain;