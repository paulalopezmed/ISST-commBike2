import React from 'react'
import {bicicletas} from "../assets/mock-data"
import Map from "./Map"
import Devolucion from "./Devolucion";
import {main, startTimer} from "../redux/actions";
import './Inicio.css'

export default class Inicio extends React.Component {
    render() {

        console.log("hola estpy aqui")
        console.log(this.props)
        // console.log(this.props.bicicleta.bikeCode)
        console.log(this.props.props.locked)
        console.log(this.props.props.finalizado)
        console.log(this.props.props.registros)
        console.log(this.props.props.bicicletas)


        return (
            <div className="Inicio">{(this.props.props.locked) ?
                <div>
                    <h2><p>Ha seleccionado la bicicleta {this.props.bicicleta.bikeCode}</p><p>Presione el botón cuando
                        quiera iniciar su viaje</p></h2>
                    <button className="selectbutton"
                            onClick={(e) => this.props.onAddRecord(this.props.bicicleta.bikeCode,this.props.props.registros,this.props.props.bicicletas)}>Iniciar viaje</button>
                </div>

                :<Devolucion
                props={this.props}
                bicicleta={this.props.bicicleta}
                onUpdateRecord={this.props.onUpdateRecord}
                onMain={this.props.onMain}
                onFinish={this.props.onFinish}
                onstopTimer={this.props.onstopTimer}

                />}</div>










        );
    }
}
// <div>{(this.props.locked === false) ?
//     <div>
//         <h2><p>Su viaje se ha iniciado{this.props.bicicleta.bikeCode}</p><p>Presione el botón cuando
//             quiera finalizar su viaje</p></h2>
//         <button className="selectbutton"
//                 onClick={(e) => this.props.onMain()}>Finalizar el viaje
//         </button>
//     </div>
//     :<div>{this.props.locked === true ?
//         <div align="center">
//             <h2><p>Ha finalizado su viaje con commBike</p> <p>Precio del viaje: {precio}€</p></h2>
//
//         </div>
//         :<div align="center">
//             <h2><p>La bicicleta no se encuentra dentro de la zona permitida, por favor dirijase
//                 dentro de esta para poder finalizar el viaje</p></h2>
//             <Map/>
//             }</div>
//     }</div>
// }
// </div>
