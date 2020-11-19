import React, { Component } from 'react';
import axios from 'axios';
import Global from './../../Global';

export default class EmpleadosRouter extends Component {
    state = {
        empleados:[],
        status: false
    }

    cargarEmpleados = () => {
        var request = "/api/empleados";
        var url = Global.urlempleados + request;
        axios.get(url).then(res=>{
            this.setState({
                empleados: res.data,
                status:true
            });
        });
    }


    componentDidMount = ()=>{
        this.cargarEmpleados();
    }
    render() {
        return (
            <div>
                <h1>Rutas Empleados</h1>
                <ul>
                    {this.state.status == true && (
                        this.state.empleados.map((emp, index)=>{
                       return( <li key={index}>{emp.apellido}
                            <a href={"/empleadosdetalle/" + emp.idEmpleado}>Detalles</a>
                        </li>)
                        })
                    )}
                </ul>
                
            </div>
        )
    }
}
