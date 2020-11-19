import React, { Component } from 'react'
import Global from './../../Global';
import axios from 'axios';

export default class EmpleadoDetalles extends Component {
    //Vamos a recibir props en un ctor 
    constructor(props){
        super(props);
        //Idempleado se está recibiendo
        console.log("Props detalle " + this.props.idempleado);
    }

    state = {
        empleado: {},
        status: false 
    }

    mostrarEmpleados = ()=>{
        var request = "/api/empleados/" + this.props.idempleado;
        var url = Global.urlempleados + request;
        axios.get(url).then(res=>{
            this.setState({
                empleado: res.data, 
                status: true
            });
        });
    }

    componentDidMount = ()=>{
        this.mostrarEmpleados();
    }

    render() {
        return (
            <div>
                <h1>Detalles empleado</h1>
                {this.state.status == true && (
                    <div>
                        <h1>
                            Apellido: {this.state.empleado.apellido}
                        </h1>
                        <h1>
                            Oficio: {this.state.empleado.oficio}
                        </h1>
                    </div>
                )}
            </div>
        )
    }
}
