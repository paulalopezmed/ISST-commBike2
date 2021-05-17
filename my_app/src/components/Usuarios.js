import React, { Component } from 'react';

import { connect } from 'react-redux';
import {questionAnswer} from "../redux/actions";
import './Navbar.css'
import {bicicletas} from "../assets/mock-data";
import './Usuarios.css'
export default class Usuarios extends React.Component {

    constructor(props){
        super(props);
        this.state = { inputValueUsu: '', inputValuePass:'' ,inputValueNewUsu: '', inputValueNewPass:'' };
    }
    updateInputValueUsu = evt => {

        this.setState({
            inputValueUsu: evt.target.value
        });
    }
    updateInputValuePass = evt => {

        this.setState({
            inputValuePass: evt.target.value
        });
    }
    updateInputValueNewUsu = evt => {

        this.setState({
            inputValueNewUsu: evt.target.value
        });
    }
    updateInputValueNewPass = evt => {

        this.setState({
            inputValueNewPass: evt.target.value
        });
    }

        render (){
            console.log(this.state.inputValueUsu)
            console.log(this.state.inputValuePass)
            console.log(this.state.inputValueNewUsu)
            console.log(this.props)

            return (
            <div id='usuario'>
               <h1 > Si ya tienes cuenta en commBike inicia sesion:</h1>
                  <h3>Usuario:</h3>
                <input type="text"  placeholder="Enter User Name"
                       value={this.state.inputValueUsu}
                       onChange={this.updateInputValueUsu}/>

                <h3>Contraseña:</h3>
                <input type="password"  placeholder="Enter Password"
                       value={this.state.inputValuePass}
                       onChange={this.updateInputValuePass}/>
                <p><button
                        onClick = {(e) =>this.props.onVerificacion(this.state.inputValueUsu,this.state.inputValuePass,this.props.props.usuarios)}
                >Seleccionar</button></p>

                <h1> Registrarse como nuevos usuario en commBike:</h1>
                    <h3>Usuario:</h3>
                    <input type="text"  placeholder="Enter User Name"
                           value={this.state.inputValueNewUsu}
                           onChange={this.updateInputValueNewUsu}/>
                <h3>Contraseña:</h3>
                    <input type="password"  placeholder="Enter Password"
                           value={this.state.inputValueNewPass}
                           onChange={this.updateInputValueNewPass}/>
                <p><button
                    onClick = {(e) =>this.props.onNuevoUsu(this.state.inputValueNewUsu,this.state.inputValueNewPass,this.props.props.usuarios)}
                >Crear usuario</button></p>


            </div>



        );

    }

}