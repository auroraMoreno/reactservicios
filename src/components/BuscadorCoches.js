import React, { Component } from 'react';
import axios from 'axios';
import Global from './../Global';


export default class BuscadorCoches extends Component {
        state = {
            coches: [],
            status: false, 
            search: []
        }
        cargarCoches = () => {
            var request = "/webresources/coches";
            var url = Global.urlcoches + request;
            axios.get(url).then(res => {
                this.setState({
                    coches: res.data,
                    search: res.data,
                    status: true
                });
            });
        }
        componentDidMount = () => {
            this.cargarCoches();
        }
        cajaMarcaRef = React.createRef();
        buscarCoches = (e) => {
            e.preventDefault();
            //VOY A FILTRAR POR TODO EL ARRAY DE COCHES
            //QUE TENEMOS GUARDADO
            //RECUPERO TODOS LOS COCHES
            var coches = this.state.coches;
            var marca = this.cajaMarcaRef.current.value.toLowerCase();
            //metodo filter de un array
            // Array.filter(objeto => objeto.propiedad == ??)
            var filtro = 
    coches.filter(car => car.marca.toLowerCase().includes(marca));
            this.setState({
                search: filtro
            });
        }
        mostrarTodosCoches = (e) => {
            e.preventDefault();
            this.setState({
                search: this.state.coches
            })
        }
        render() {
            return (
                <div>
                    <h1>Buscador Api Coches</h1>
                    <form>
                        <label>Marca: </label>
                        <input type="text" name="cajamarca"
                        ref={this.cajaMarcaRef}/>
                        <button onClick={this.mostrarTodosCoches}>
                            Mostrar todos Coches
                        </button>
                        <button onClick={this.buscarCoches}>
                            Buscar coches
                        </button>
                    </form>
                    {(this.state.search.length > 0 && this.state.status == true) &&
                    (<table>
                        <thead>
                            <tr>
                                <th>Marca</th>
                                <th>Modelo</th>
                                <th>Conductor</th>
                                <th>Imagen</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.search.map((car, index) => {
    return (<tr key={index}>
        <td>{car.marca}</td>
        <td>{car.modelo}</td>
        <td>{car.conductor}</td>
        <td>
           <img src={car.imagen}
           style={{width: "150px", height: "150px"}}
           alt={car.marca}/>
        </td>
    </tr>);                            
                            })}
                        </tbody>
                    </table>)}
                </div>
            )
        }
    }