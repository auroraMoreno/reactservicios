import React, { Component } from 'react';
import axios from 'axios';
import Global from './../../Global';
import {Redirect} from 'react-router-dom';

export default class InsertarDepartamento extends Component {

    cajaNumeroRef = React.createRef();
    cajaNombreRef = React.createRef();
    cajaLocalidadRef = React.createRef();

    state ={
        mensaje: "",
        status:false
    }

    nuevoDepartamento = (e) => {
        e.preventDefault();
        var num = parseInt(this.cajaNumeroRef.current.value);
        var nombre = this.cajaNombreRef.current.value;
        var loc = this.cajaLocalidadRef.current.value;
        var dept ={
            numero:num,
            nombre:nombre,
            localidad:loc
        }
        var request = "/api/departamentos";
        var url = Global.urlcruddept + request;
        axios.post(url,dept).then(res =>{
            this.setState({
                mensaje: "Nuevo departamento " + num,
                status: true
            });
        });
    }

    render() {
        if(this.state.status == true){
            return <Redirect to="/"/>
        }
        return (
            <div>
                <h1>Nuevo departamento</h1>
                <form onSubmit={this.nuevoDepartamento}>
                    <label>Numero</label>
                    <input type="number" name="cajanumero" className="form-control" ref={this.cajaNumeroRef}/>
                    <br/>
                    <label>Nombre</label>
                    <input type="text" name="cajanombre" className="form-control" ref={this.cajaNombreRef}/>
                    <br/>
                    <label>Localidad</label>
                    <input type="text" name="cajalocalidad" className="form-control" ref={this.cajaLocalidadRef}/>
                    <button className="btn btn-success">Insertar</button>
                </form>
        <h3>{this.state.mensaje}</h3>
            </div>

        )
    }
}
