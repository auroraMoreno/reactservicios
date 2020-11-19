import React, { Component } from 'react';
import axios from 'axios';
import Global from './../../Global';
import {NavLink} from 'react-router-dom'; 

export default class DetallesDepartamento extends Component {

    constructor(props){
        super(props);
        this.setState({
            iddepartamento:props.iddepartamento
        });
    }

    state={
        departamento: {},
        status: false,
        iddepartamento: 0
    }

    buscarDepartamentos = () =>{
        var request = "/api/departamentos/" + this.props.iddepartamento;
        var url = Global.urlcruddept + request;
        axios.get(url).then(res=>{
            this.setState({
                departamento:res.data,
                status:true
            });
        });
    }

    componentDidMount = ()=>{
        this.buscarDepartamentos();
    }

    render() {
        return (
            <div>
                <h1>Detalles departamento</h1>
                {this.state.status == true && (
                   <React.Fragment> 
                    <NavLink to="/">Volver al listado</NavLink>
                    <h1>Numero: {this.state.departamento.numero}</h1>
                    <h1>Nombre: {this.state.departamento.nombre}</h1>
                    <h1>Localidad: {this.state.departamento.localidad}</h1>
                    <NavLink to={"/update/" 
                    + this.state.departamento.numero + "/" 
                    + this.state.departamento.nombre + "/" 
                    + this.state.departamento.localidad}>Modificar</NavLink>
                    <hr/>
                    <NavLink to={"/delete/" + this.state.departamento.numero} 
                    className="btn btn-warning">Eliminar con NavLink</NavLink>
                    </React.Fragment>
                   
                )}
            </div>
        )
    }
}
