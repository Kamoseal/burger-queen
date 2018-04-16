import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    const liStyle= {
        display: 'inline',
        margin: '20px',
    }
    const ulStyle = {
        textAlign: 'center'
    }
    const textStyle = {
        color: 'black'
    }

    return (

        <ul style={ulStyle}>
        <li style={liStyle}>
            <Link style={textStyle} to="/">Home</Link>
        </li>
        <li style={liStyle}>
            <Link style={textStyle} to="/menu">Menú</Link>
        </li>
        <li style={liStyle}>
            <Link style={textStyle} to="/checkout">Checkout</Link>
        </li>
        </ul>
    );
};

export default NavBar;