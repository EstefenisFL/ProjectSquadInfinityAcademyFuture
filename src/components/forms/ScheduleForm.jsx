import React, {Component} from 'react'
import {Form, Button, Message} from 'semantic-ui-react';
import InlineError from '../misc/InlineError';
import './ScheduleForm.css';

class ScheduleForm extends Component{
    constructor(props){
        super(props);
        this.state={
            data:{
                "name":'',
                "email":'',
                "contact":''
            },
            loading:false,
            errors:{},
        }
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }
    onChange = (e) =>{
        this.setState({
            data:{...this.state.data,[e.target.name]:e.target.value}
        })
    }
    onSubmit = () =>{
        const errors={};
        if(!this.state.data.name){
            errors.name= "name required";
        }
        if(!this.state.data.email){
            errors.email="email required";
        }
        if(!this.state.data.contact){
            errors.contact="contact required";
        }
        this.setState({
            errors:errors
        })
        if(Object.keys(errors).length === 0){
            this.setState({loading:true});
            this.props.submit(this.state.data)
                .catch(err => this.setState({
                    errors: err.response.data.errors,
                    //errors: {global: false},
                    loading:false
                }));
        }
    }


    render(){
        return(
            <Form onSubmit={this.onSubmit} loading={this.state.loading} className = "Schedule-Form">
                {this.state.errors.global && (
                    <Message negative>
                        <Message.Header>Something went wrong</Message.Header>
                        <p>{this.state.errors.global}</p>
                    </Message>
                    )}
                <Form.Field error={!!this.state.errors.name}>
                    <label htmlFor="username" style = {{color: "white"}}>Name</label>
                    <input className="Schedule-Inputs"
                        type="username"
                        id="username"
                        name="name"
                        placeholder="username"
                        value={this.state.data.name}
                        onChange={this.onChange}
                    />
                    {this.state.errors.name && <InlineError text={this.state.errors.name}/>}
                </Form.Field>
                <Form.Field error={!!this.state.errors.email}>
                    <label htmlFor="email" style = {{color: "white"}}>Email</label>
                    <input className="Schedule-Inputs"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="email"
                        value={this.state.data.email}
                        onChange={this.onChange}
                    />
                    {this.state.errors.email && <InlineError text={this.state.errors.email}/>}
                </Form.Field>
                <Form.Field error={!!this.state.errors.contact}>
                    <label htmlFor="contact" style = {{color: "white"}}>Contato</label>
                    <input className="Schedule-Inputs"
                        type="contact"
                        id="contact"
                        name="contact"
                        placeholder="contato"
                        value={this.state.data.contact}
                        onChange={this.onChange}
                    />
                    {this.state.errors.contact && <InlineError text={this.state.errors.contact}/>}
                </Form.Field>
                <Button primary className = "Schedule-Button" style={{marginLeft: "8vw"}}>Login</Button>
            </Form>
        );
    }
}
export default ScheduleForm;