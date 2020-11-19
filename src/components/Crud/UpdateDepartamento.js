import React, { Component } from 'react';
import axios from 'axios';
import Global from './../../Global';
import {Redirect} from 'react-router-dom'; 



export default class UpdateDepartamento extends Component {

    cajaNumeroRef= React.createRef();
    cajaNombreRef = React.createRef();
    cajaLocalidad = React.createRef();

    modificarDepartamento = (e) => {
        e.preventDefault();
        var num = parseInt(this.cajaNumeroRef.current.value);
        var nom = this.cajaNombreRef.current.value;
        var loc = this.cajaLocalidad.current.value;
        var dept = {
            numero: num,
            nombre: nom,
            localidad: loc
        }

        var request = "/api/departamentos";
        var url = Global.urlcruddept + request;
        axios.put(url, dept).then(res=>{
            this.setState({
                status:true 
            });
        });

    }

    state = {
        status:false
    }

    render() {

        if(this.state.status == true){
            return <Redirect to="/"/>;
        }
        return (
            <div>
                <h1>Modifcar departamento</h1>
                <form onSubmit={this.modificarDepartamento}> 
                    <label>Numero</label>
                    <input type="number"
                            name="cajanumero"
                            className="form-control"
                            ref={this.cajaNumeroRef}
                            defaultValue={this.props.iddepartamento}
                            readOnly/> 
                    <br/>
                    <label>Nombre</label>
                    <input type="text"
                            name="cajanombre"
                            className="form-control"
                            ref={this.cajaNombreRef}
                            defaultValue={this.props.nombre}
                            /> 
                    <br/>
                    <label>Localidad</label>
                    <input type="text"
                            name="cajalocalidad"
                            className="form-control"
                            ref={this.cajaLocalidad}
                            defaultValue={this.props.localidad}
                            /> 
                    <br/>
                    <button className="btn btn-info">Modificar</button>
                </form>
            </div>
        )
    }
}
