import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Login.css';
import { render } from '@testing-library/react';

const Login =(props) =>

    {

    return<div className="maindiv_style">
    <button>Sign In as  {props.name}</button>
    <p>Welcome bunny :)</p>
    </div>
    
    }
export default Login;