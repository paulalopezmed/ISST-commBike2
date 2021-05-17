import React from 'react'
import {bicicletas} from "../assets/mock-data"
import Map from "./Map"
export default class Devolucion extends React.Component {
    render() {
        console.log("DEVOLUCION")
        console.log(this.props.onstopTimer)
        console.log(this.props.bicicleta)
        console.log("comprobaciones")

        console.log(this.props.bicicleta.bikeCoordenatesX < 40.484151)

        console.log(this.props.bicicleta.bikeCoordenatesX > 40.382311)
        console.log(this.props.bicicleta.bikeCoordenatesY > -3.724694)
        console.log(this.props.bicicleta.bikeCoordenatesY < -3.657918)
        const precio = this.props.props.props.time * 0.1


        return (<div className="Devolucion">{(!this.props.props.props.finalizado)?
            <div>
                <h2><p>Su viaje se ha iniciado {this.props.bicicleta.bikeCode}</p><p>Presione el botón cuando
                    quiera finalizar su viaje</p></h2>
                <button className="selectbutton"

                onClick={(e) => this.props.onUpdateRecord(this.props.bicicleta.bikeCode,this.props.props.props.registros,this.props.props.props.bicicletas)}>Finalizar el viaje</button>
            </div>

            : <div> {this.props.bicicleta.bikeCoordenatesX  < 40.484151 && this.props.bicicleta.bikeCoordenatesX  > 40.382311
            && this.props.bicicleta.bikeCoordenatesY > -3.724694 && this.props.bicicleta.bikeCoordenatesY < -3.657918 ?
            <div>
            <h2><p>Ha finalizado su viaje con commBike</p> <p>Precio del viaje: {this.props.props.props.registros[this.props.props.props.registros.length-1].precio}€</p></h2>
            <button className="selectbutton"
            onClick={(e) => this.props.onMain()}>Volver a realizar un viaje</button>
            </div>
            : <div><p>La bicicleta no se encuentra dentro de la zona permitida, por favor dirijase
            dentro de esta para poder finalizar el viaje</p>
            <div><img id='mapImagen' src={process.env.PUBLIC_URL + "/mapacuadrado.png"}/></div>
            <button className="selectbutton"
            onClick={(e) => this.props.onUpdateRecord(this.props.bicicleta.bikeCode,this.props.props.props.registros,this.props.props.props.bicicletas)}>Finalizar el viaje</button></div>
            }</div>}</div>


            );
            }
            }


                // <iframe src="https://www.google.com/maps/d/embed?mid=1t2Nk2YRoXb8-G03cZXY9UUmw_3OgyJo9" width="640" height="480"></iframe>