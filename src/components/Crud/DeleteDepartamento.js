import React, { Component } from 'react';
import axios from 'axios'; 
import Global from './../../Global';
import {Redirect} from 'react-router-dom';

export default class DeleteDepartamento extends Component {

    state = {
        status: false
    }

    eliminarDepartamento = () =>{
        var request ="/api/departamentos/" + this.props.iddepartamento;
        var url = Global.urlcruddept + request;
        console.log("dentro");
        axios.delete(url).then(res => {
            this.setState({
                status: true
            });
        });
    }

    render() {
        if(this.state.status == true){
            return <Redirect to="/" />
        }
        return (
            <div>
                <h1>¿Desea eliminar departamento 
                    {this.props.iddepartamento} ? </h1>
                    <button className="btn btn-danger" onClick={this.eliminarDepartamento}>Eliminar</button>
            </div>
           
        )
    }
}
