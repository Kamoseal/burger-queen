import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Checkout from "./components/Checkout";


class App extends Component {
  constructor() {
    super();
    this.state = {
    
      menu: [
        {
          title: 'Café Americano',
          price: 5,
          quantity: 0, 
          id: 1
        }, 
        {
          title: 'Café con leche',
          price: 7,
          quantity: 0,
          id: 2
        },
        {
          title: 'Sandwich de jamón y queso',
          price: 10,
          quantity: 0, 
          id: 3
        },
        {
          title: 'Jugo natural',
          price: 7,
          quantity: 0,
          id: 4
        }
      ,
        {
          title: 'Hamburguesa simple',
          price: 10,
          quantity: 0,
          id: 5
        }, 
        {
          title: 'Hamburguesa doble',
          price: 15,
          quantity: 0,
          id: 6
        }, 
        {
          title: 'Papas',
          price: 5,
          quantity: 0,
          id: 7
        },
        {
          title: 'Aros de cebolla',
          price: 5,
          quantity: 0,
          id: 8
        },
        {
          title: 'Agua',
          price: 5,
          quantity: 0,
          id: 9
        },
        {
          title: 'Gaseosa',
          price: 7,
          quantity: 0,
          id: 10
        }
      ]
    };
  }

  handleAdd = (index) => {
    let { menu } = this.state;
    menu[index].quantity = menu[index].quantity + 1;
    this.setState({menu})
  }

  handleMinus = (index) => {
    let { menu } = this.state;
    menu[index].quantity = menu[index].quantity - 1;
    this.setState({menu})
  }

  handleAddCO = (id) => {
    console.log(id)
    let { menu } = this.state;
    let newMenu = []
    menu.forEach((element) => {
      if(element.id === id){
        element.quantity = element.quantity + 1
        newMenu.push(element)
      }
      else {
        newMenu.push(element)
      }
    })
    this.setState({menu: newMenu})
  }

  handleMinusCO = (id) => {
    console.log(id)
    let { menu } = this.state;
    let newMenu = []
    menu.forEach((element) => {
      if(element.id === id){
        element.quantity = element.quantity - 1
        newMenu.push(element)
      }
      else {
        newMenu.push(element)
      }
    })
    this.setState({menu: newMenu})
  
  }

  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route component={Home} path="/" exact />
          <Route render={()=><Checkout menu={this.state.menu} handleMinusCO={this.handleMinusCO} handleAddCO={this.handleAddCO}/>} path="/checkout" />
          <Route render={()=><Menu menu={this.state.menu}  handleMinus={this.handleMinus} handleAdd={this.handleAdd}/>} path="/menu" />
        </Switch>
      </div>
    );
  }
}

export default App;