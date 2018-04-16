import React, { Component } from "react";
import {Table} from 'react-materialize'

class Checkout extends Component {
    constructor(props){
        super(props)
        this.state = {
            menu: this.props.menu,
            
        }
    }



    render(){
        let cart = []
        let total = 0
        this.props.menu.map((item)=>{
            if(item.quantity > 0 ){
                cart.push(item)
                total = total + (item.price * item.quantity)
            }
        })
        const buttonStyle = {
            margin: '0 auto'
        }
        return(
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th data-field="id">Producto</th>
                            <th data-field="name">Precio</th>
                            <th data-field="price">Catidad</th>
                            <th data-field="price">Subtotal</th>
                        </tr>
                    </thead>

                    <tbody>
                        {cart.map((item, i) =>
                            <tr key={i}>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td>
                                    <a className="waves-effect waves-light orange darken-4 btn" onClick={ () => this.props.handleMinusCO(item.id)}>-</a>
                                    {item.quantity}
                                    <a className="waves-effect waves-light orange darken-4 btn" onClick={ () => this.props.handleAddCO(item.id)}>+</a>
                                </td>
                                <td>{item.price * item.quantity}</td>
                            </tr>
                        )}
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{total}</td>
                        </tr>
                    </tbody>
                </Table>
                <a style ={buttonStyle} className="waves-effect waves-light btn red darken-4">Pagar</a>


            </div>
        )
    }
}


export default Checkout;