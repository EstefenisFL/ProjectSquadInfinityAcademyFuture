import React, { Component } from "react";
import api from "./api";
import "./apps.css";

class Apps extends Component{

   /*  state= {
        filmes: [],
    }

    async componentDidMount(){
        const response = await api.get('/');

        this.setState({ filmes: response.data});
    }

    render(){

        const { filmes } = this.state;
        return(
        <div className="teste">   
           <h1>Listar os Filmes</h1> 
           {console.log(filmes)}
           {filmes.map(filme =>(
               <li key={filme.show.id}>     
                <h2>
                    <strong>Título: </strong>
                    {filme.show.name}
                </h2>
                <p>
                    {filme.show.url}
                </p>
               </li>
           ))}
        </div>
        );
    }; */

    state= {
        persons: [],
    }

    async componentDidMount(){
        const response = await api.get('/v1/user/1');

        this.setState({ persons: response.data});
    }

    render(){

        const { persons } = this.state;
        return(
        <div className="teste">   
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
        );
    };
}


export default Apps;