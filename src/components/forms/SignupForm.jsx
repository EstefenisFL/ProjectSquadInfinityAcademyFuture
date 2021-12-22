import React,{Component} from 'react'
import {Form,Button,Message} from 'semantic-ui-react'
import InlineError from '../misc/InlineError'

class SignupForm extends Component{
    constructor(props){
        super(props)
        this.state={
            data: {
                username:'',
                password:''
            },
            loading: false,
            errors: {
            }
        }

        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }
    onChange = (e) =>{
        this.setState({
            data:{...this.state.data,[e.target.name]: e.target.value}
        })
    }
    onSubmit = () =>{
        console.log("Yep", this.state);
        const errors={};
        if(!this.state.data.username){
            errors.username= "username required";
        }
        if(!this.state.data.password){
            errors.password="password required";
        }

        this.setState({
            errors:errors
        })

        if(Object.keys(errors).length === 0){
            this.setState({loading:true});
            this.props.submit(this.state.data)
                .catch(err => this.setState({
                    errors : err,
                    //errors: {global: false},
                    loading : false
                }));
        }
        window.location.href="/agendamento";
    }

    render(){
        // console.log("ERROR KI MKC", this.state.errors);
        return(
            <Form onSubmit={this.onSubmit} loading={this.state.loading} style = {{marginLeft: "55vw", width:"20vw"}}>
                {this.state.errors.global && (
                    <Message negative>
                        <Message.Header>Something went wrong</Message.Header>
                        <p>{this.state.errors.global}</p>
                    </Message>
                )}
                <Form.Field error={!!this.state.errors.username} >
                    <label htmlFor="username" style = {{color: "white"}}>Name</label>
                    <input
                        style={{width:"20vw", height: "2vw"}}
                        type="username"
                        id="username"
                        name="username"
                        value={this.state.data.username}
                        onChange={this.onChange}
                    />
                    {this.state.errors.username && <InlineError text={this.state.errors.username}/>}
                </Form.Field>
                <Form.Field error={!!this.state.errors.sexo} >
                    <label htmlFor="username" style = {{color: "white"}}>Sexo</label>
                    <input
                        style={{width:"20vw", height: "2vw"}}
                        type="username"
                        id="sexo"
                        name="sexo"
                        value={this.state.data.sexo}
                        onChange={this.onChange}
                    />
                    {this.state.errors.sexo && <InlineError text={this.state.errors.sexo}/>}
                </Form.Field>



                <Form.Field error={!!this.state.errors.endereco} >
                    <label htmlFor="username" style = {{color: "white"}}>Endereço</label>
                    <input
                        style={{width:"20vw", height: "2vw"}}
                        type="username"
                        id="Endereço"
                        name="Endereço"
                        value={this.state.data.endereco}
                        onChange={this.onChange}
                    />
                    {this.state.errors.endereco && <InlineError text={this.state.errors.endereco}/>}
                </Form.Field>




                 <Form.Field error={!!this.state.errors.cpf} >
                    <label htmlFor="username" style = {{color: "white"}}>CPF</label>
                    <input
                        style={{width:"20vw", height: "2vw"}}
                        type="username"
                        id="cpf"
                        name="cpf"
                        value={this.state.data.cpf}
                        onChange={this.onChange}
                    />
                    {this.state.errors.cpf && <InlineError text={this.state.errors.cpf}/>}
                </Form.Field>


                 <Form.Field error={!!this.state.errors.date} >
                    <label htmlFor="date" style = {{color: "white"}}>Data de Nascimento</label>
                    <input
                        style={{width:"20vw", height: "2vw"}}
                        type="date"
                        id="date"
                        name="date"
                        value={this.state.data.date}
                        onChange={this.onChange}
                    />
                    {this.state.errors.date && <InlineError text={this.state.errors.date}/>}
                </Form.Field>


                <Form.Field error={!!this.state.errors.telefone} >
                    <label htmlFor="username" style = {{color: "white"}}>Telefone</label>
                    <input
                        style={{width:"20vw", height: "2vw"}}
                        type="username"
                        id="telefone"
                        name="telefone"
                        value={this.state.data.telefone}
                        onChange={this.onChange}
                    />
                    {this.state.errors.telefone && <InlineError text={this.state.errors.telefone}/>}
                </Form.Field>
                <Button onClick={() => this.onSubmit } primary style = {{marginLeft: "7vw"}}>Signup</Button>
            </Form>
        );
    }
}

export default SignupForm