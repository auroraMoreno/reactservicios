import React, { Component } from 'react';
import axios from 'axios';
import Global from './../../Global';
import { NavLink } from 'react-router-dom';

export default class Departamentos extends Component {

    state = {
        departamentos:[],
        status:false 
    }

    cargarDepartamentos = ()=>{
        var request = "/api/departamentos";
        var url = Global.urlcruddept + request; 
        axios.get(url).then(res => {
            this.setState({
                departamentos: res.data,
                status:true
            });
        });
    }

    componentDidMount = ()=>{
        this.cargarDepartamentos();
    }

    render() {
        return (
            <div>
                <h1>Departamentos</h1>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Numero</th>
                            <th>Nombre</th>
                            <th>Localidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.status == true && (
                            this.state.departamentos.map((dept, index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{dept.numero}</td>
                                        <td>{dept.nombre}</td>
                                        <td>{dept.localidad}</td>
                                        <NavLink to={"/details/" + dept.numero}>Detalles</NavLink>
                                    </tr>
                                )
                            })
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}
