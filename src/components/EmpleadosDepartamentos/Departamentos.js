import React, { Component } from 'react';
import axios from 'axios';
import Global from '../../Global';


export default class Departamentos extends Component {

    seleccionado = React.createRef();
    state={
        departamentos:[],
        empleados:[],
        status:false
    }

    cargarDepartamentos = ()=>{
        var url = Global.urldepartamentos;
        axios.get(url).then(res=> {
            this.setState({
            departamentos: res.data,
            status:true
            });
        });
    }

    componentDidMount=()=>{
        this.cargarDepartamentos();
    }

    cargarEmpleados = (e)=>{
        e.preventDefault();
        var valor= this.seleccionado.current.options;
        var urlEmpleados = Global.urlempleados + "api/Empleados/EmpleadosDepartamento/" + valor;
        axios.get(urlEmpleados).then(res=>{
            this.setState({
                empleados:res.data,
                status:true
            });
        });
        console.log(valor);
    }
    render() {
        return (
            <div>
                <h1>Seleccion de elementos</h1>
                <form onSubmit={this.cargarEmpleados}>
                    <select name="selectNumeros" ref={this.seleccionado}>
                     {this.state.departamentos.map((d, index) => {
                        return(<option key={index} value={d.Numero}>{d.Nombre}</option>)
                        })}
                    </select>
                    <button>Generar tabla</button>
                </form>
        

            </div>

        )
       
    }
}

