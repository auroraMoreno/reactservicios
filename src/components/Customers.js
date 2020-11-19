import React, { Component } from 'react'
//primero agregar la libreria de axios
import axios from "axios";

export default class Customers extends Component {
    urlcustomers = "http://northwind.netcore.io/customers.json";
    //Almacenamos los clientes en state
    state = {
        customers: []
    }

    cargarClientes = () =>{
        axios.get(this.urlcustomers).then(res=> {
            console.log(res.data.customers);
            this.setState({
                customers: res.data.customers
            });
        });
    }

    componentWillMount = ()=>{
        this.cargarClientes();
    }

    render() {
        return (
            <div>
                <h1>Servicios Api Customers</h1>
                {this.state.customers.map(cliente =>{
                    return(<h2 key={cliente.id}>
                        {cliente.contactName}
                    </h2>);
                })}
            </div>
        )
    }
}
