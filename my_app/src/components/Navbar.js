
import React, { Component } from 'react';

import { connect } from 'react-redux';
import {questionAnswer, selectBike} from "../redux/actions";
import './Navbar.css'
import Usuarios from "./Usuarios";
import {bicicletas} from "../assets/mock-data";





export default class Navbar extends React.Component {
        render (){
        console.log("hola estoy aqui hola hola navbar")
    console.log(this.props.props.variableRegistro)
        return (

        <div id='navbar'>

          <img id='logo' src={process.env.PUBLIC_URL + "/your-logo.png"}/>

           {this.props.props.usuario === "" ?
           <div>
           <button
                         id='userBoton'
                         className='buttonuser'
                         onClick = {(e) =>this.props.onRegistro()}>


                     <img id='userImagen' src={process.env.PUBLIC_URL + "/usuario.png"}/>
                     </button></div>
           :
           <div>
           <p id='nombre'>  {this.props.props.usuario} </p>
            </div>}


        </div>

        );

        }

        }
        //<div className='logo'>
          //      <img  src={process.env.PUBLIC_URL + "/your-logo.png"}/>
        //        </div>
      //          <div className='botonusuario'>
    //                <button className='buttonuser'><img src={process.env.PUBLIC_URL + "/usuario.png"}/></button>

  //              </div>