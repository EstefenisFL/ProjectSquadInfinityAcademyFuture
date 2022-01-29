import React from "react";
import {Form,Button} from 'semantic-ui-react';
import api from '../../../api';
import {setBaseUrl} from '../../../actions/auth';
import EditFormUser from "../../forms/EditFormUser";
import {useState} from "react";
import { any } from "prop-types";

class UserListMain extends React.Component{
    constructor(props){
        super(props);    
        this.state= {
            valueToUse:0,
            persons: [],
            controler:any,
            personToChild:[],
        };
        
        this.submitSave=this.submitSave.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.getUser = this.getUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.updateUser=this.updateUser.bind(this);
    }
        
        submitSave = (data) =>{
            if(this.valueToUse){
            this.updateUser(this.valueToUse,data);
            }
        }
   
        handleChange(event){
            this.personToChild = event.target._wrapperState.initialValue;
            this.valueToUse = 0;
            if(this.valueToUse !== parseInt(this.personToChild.id_user)){
                this.valueToUse = parseInt(this.personToChild.id_user);
            }else{
                this.valueToUse = 0;
            }  
        }
        
        async getUser() {
            const response = await api.actions.getAllUsers(); 
            this.setState({ persons: response});
            console.log("Listagem com sucesso");
        }
        async deleteUser() {
            await api.actions.deleteUser(this.valueToUse);
            alert('O usuário foi deletado com sucesso');
            const response = await api.actions.getAllUsers(); 
            this.setState({ persons: response});
            console.log("Listagem atualizada com sucesso");
        }
    
        async updateUser(id, data) {
             await api.actions.updateUser(id, data);
            console.log("Usuário atualizado");
            const response = await api.actions.getAllUsers(); 
            this.setState({ persons: response});
            console.log("Listagem atualizada com sucesso");
        }
                
    render(){
        const { persons } = this.state;
        return (
            <div className='User-main'>
                <div className="container-List">
                    <div className='User-Heading'>
                        <hr />
                        <h2>Lista de Usuários</h2>
                        <hr />
                    </div>
                    
                
                    <div className="user">   
                    <h1>List of Persons</h1>
                    {persons.map(person =>(
                        <form>
                        <li key={person.id_user}>     
                            <h2>
                            <strong>
                                <input type="checkbox" id="scales" name="scales" value={person} onChange={this.handleChange}/>
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
                    <Button onClick={this.deleteUser} color="red" >Deletar</Button>
                    </div>
                </div>
                             
                    <EditFormUser submit={this.submitSave}/>   
            </div>
        )
    }
}

export default UserListMain;