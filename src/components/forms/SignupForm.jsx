import React from 'react';
import {Form,Button} from 'semantic-ui-react';
import api from '../../api';

class SignupForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userData:{
                "user_nome":'',
                "user_sexo":'',
                "user_endereco":'',
                "user_cpf":'',
                "user_data_nasc":'',
                "user_tel":''
            },
        }
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    } 
    
    
    /* userData = {
        name:'',
        sexo:'',
        endereco:'',
        cpf:'',
        dataNascimento: '',
        telefone:'',
    } */

    onChange = (e) =>{
        this.setState({
            userData:{...this.state.userData,[e.target.name]: e.target.value}
        })
    }
    onSubmit = () =>{
        this.props.submit(this.state.userData);
    }

    render(){
        // console.log("ERROR KI MKC", this.state.errors);
        return(
            <Form onSubmit={this.onSubmit} loading={this.state.loading} style = {{marginLeft: "55vw", width:"20vw"}}>
                
                <Form.Field>
                    <label htmlFor="username" style = {{color: "white"}}>Name</label>
                    <input
                        style={{width:"20vw", height: "2vw"}}
                        type="text"
                        id="name"
                        name="user_nome"
                        value={this.state.userData.username}
                        onChange={this.onChange}
                    />
                </Form.Field>

                <Form.Field >
                    <label htmlFor="username" style = {{color: "white"}}>Sexo</label>
                    <input
                        style={{width:"20vw", height: "2vw"}}
                        type="text"
                        id="sexo"
                        name="user_sexo"
                        value={this.state.userData.sexo}
                        onChange={this.onChange}
                    />
                </Form.Field>

                <Form.Field >
                    <label htmlFor="username" style = {{color: "white"}}>Endereço</label>
                    <input
                        style={{width:"20vw", height: "2vw"}}
                        type="text"
                        id="endereco"
                        name="user_endereco"
                        value={this.state.userData.endereco}
                        onChange={this.onChange}
                    />
                </Form.Field>

                 <Form.Field >
                    <label htmlFor="username" style = {{color: "white"}}>CPF</label>
                    <input
                        style={{width:"20vw", height: "2vw"}}
                        type="text"
                        id="cpf"
                        name="user_cpf"
                        value={this.state.userData.cpf}
                        onChange={this.onChange}
                    />
                </Form.Field>

                 <Form.Field >
                    <label htmlFor="date" style = {{color: "white"}}>Data de Nascimento</label>
                    <input
                        style={{width:"20vw", height: "2vw"}}
                        type="date"
                        id="date"
                        name="user_data_nasc"
                        value={this.state.userData.date}
                        onChange={this.onChange}
                    />
                </Form.Field>

                <Form.Field >
                    <label htmlFor="username" style = {{color: "white"}}>Telefone</label>
                    <input
                        style={{width:"20vw", height: "2vw"}}
                        type="text"
                        id="telefone"
                        name="user_tel"
                        value={this.state.userData.telefone}
                        onChange={this.onChange}
                    />
                </Form.Field>

                <Button onClick={() => this.onSubmit } primary style = {{marginLeft: "7vw"}}>Signup</Button>

            </Form>
        );
    }
}

export default SignupForm