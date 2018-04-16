import {Card, Col, Row} from 'react-materialize'
import React, { Component } from "react";

class Menu extends Component {
    constructor(props){
        super(props)
        this.state = {
            menu: this.props.menu,
        }
    }

        
    render(){
        const inputStyle = {
            width: '10%',
            textAlign: 'center'
        }
        const centerStyle = {
            textAlign: 'center'
        }
  
            this.state.menu.map(item =>{
                // console.log(item)
            })



        
        return (
            <div>
            <Row>
                {this.state.menu.map((item, i) =>
                    <Col key={i} m={4} s={6}>
                        <Card style={centerStyle} className=' yellow darken-2' textClassName='white-text' title={item.title}>
                            <h5>Precio: ${item.price}</h5>
                            <a onClick={ () => this.props.handleMinus(i) } className="waves-effect waves-light orange darken-4 btn">-</a>
                            <input style={inputStyle} type="text" value={item.quantity}></input>
                            <a onClick={ () => this.props.handleAdd(i) } className="waves-effect waves-light orange darken-4 btn">+</a>
                        </Card>
                    </Col>
                )}

            </Row>
            </div>
        )
    }

}


export default Menu;