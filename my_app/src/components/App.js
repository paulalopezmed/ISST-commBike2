import React, { Component } from 'react';

import { connect } from 'react-redux';
import {
    startTimer,
    stopTimer,
    selectBike,
    main,
    resetTimer,
    finish,
    initBicicletas,
    addRecord,
    initRegistros,
    verificacion,
    registro,
    initUsuarios,
    nuevoUsu,
    UPDATE_RECORD, updateRecord
} from "../redux/actions";import Navbar from './Navbar'
import Map from "./Map";
import Code from "./Code";
import Admin from "./Admin";
import './App.css'
import Inicio from "./Inicio";
import Usuarios from "./Usuarios";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true

        };
    }

    // console.log(props)
    render() {
        console.log(this.props)
        console.log(this.props.bicicletas)
        return (
            <div id="divStyle" >
                <Navbar
                    props={this.props}
                             onRegistro={() => {
                                 this.props.dispatch(registro())}}


                             />
                {(this.props.role === "user" || this.props.role === "" ) ?

                    this.props.variableRegistro === false ?
                this.props.currentBike === 0  ? <div className="App">
                        <h1 id="texto1">Alquiler de bicicletas commBike</h1>
                        <h3 id="texto">1. Acérquese a una de las bicicletas disponibles</h3>
                        <Map/>
                        <h3 id="texto">2.Introduce el codigo que encontraras en la bicicleta: </h3>
                        <Code
                            props={this.props}
                            onSelectBike={(code,bicicletas) => {
                                this.props.dispatch(selectBike(code,bicicletas))
                            }}
                            />
                    </div>
                    : this.props.usuario ==="" ?<div className="Appiniciosesion"><p id="texto">!Inicia sesion antes de empezar!</p></div>
                    :<Inicio
                        bicicleta={this.props.bicicletas[this.props.currentBike]}
                        props={this.props}
                        onstartTimer={() => {
                            this.props.dispatch(startTimer())
                        }}
                        onAddRecord={(code,registros,bicicletas) => {
                            this.props.dispatch(addRecord(code,registros,bicicletas))
                        }}
                        onUpdateRecord={(code,registros,bicicletas) => {
                            this.props.dispatch(updateRecord(code,registros,bicicletas))
                        }}
                        onFinish={() => {
                            this.props.dispatch(finish())}}
                        onstopTimer={() => {
                            this.props.dispatch(stopTimer())}}
                        onMain={() => {
                            this.props.dispatch(main())
                        }}/>

                    :<Usuarios
                            props={this.props}
                            onVerificacion={(userName, password,usuarios) => {
                                this.props.dispatch(verificacion(userName, password,usuarios))
                            }}
                            onNuevoUsu={(userName, password,usuarios) => {
                                this.props.dispatch(nuevoUsu(userName, password,usuarios))}}
                        />
                    :<Admin/>
                }




            </div>
        );

    }
    async componentDidMount(){

        // const res = await fetch('http://localhost:8080/commBike/rest/bicicletas', {
        //              mode:'no-cors'
        //             headers:{
        //                  'Content-Type': 'application/json'
        //             }
        //          })
        //

        // if(!res.ok){
        //     const message = "An error has ocurred:" + res.statusText
        //     throw new Error (message);
        // }
        //
        // const bicicletas = await res.json();
        // console.log('las bicicletas son' + bicicletas)
        // return  bicicletas


        try {

            const res = await fetch("http://localhost:8080/commBike/rest/bicicletas/", {

                headers:{
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    // 'Access-Control-Allow-Origin': '*',
                    // 'Access-Control-Allow-Credentials': 'true'
                }
            })
            const res2 = await fetch("http://localhost:8080/commBike/rest/registros", {

                headers:{
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    // 'Access-Control-Allow-Origin': '*',
                    // 'Access-Control-Allow-Credentials': 'true'
                }
            })
            const res3 = await fetch("http://localhost:8080/commBike/rest/usuarios", {

                headers:{
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    // 'Access-Control-Allow-Origin': '*',
                    // 'Access-Control-Allow-Credentials': 'true'
                }
            })



            console.log(res)
            // console.log("AQUIIIIIIIIIIIII")
            const bicicletas = await res.json();
            const registros = await res2.json();
            const usuarios = await res3.json();
            console.log("AQUIIIIIIIIIIIII")
            console.log("array" + bicicletas)
            console.log("array" + registros)
            console.log("array" + registros)
            this.props.dispatch(initBicicletas(bicicletas));
            this.props.dispatch(initRegistros(registros));
            this.props.dispatch(initUsuarios(usuarios));

            setTimeout(() => {
                this.setState({loading: false});
            }, 2000);
        } catch (e) {
            alert("ERROR hola hola");
        }
    }

}
// const bicicletas = await res.json();
// console.log("AQUIIIIIIIIIIIIIIIIIIII")
// console.log(bicicletas)
// this.props.dispatch(initBicicletas(bicicletas));
// setTimeout(() => {
//     this.setState({loading: false});
// }, 2000);

function mapStateToProps(state) {
    return {
        ...state
    };
}

export default connect(mapStateToProps)(App);
