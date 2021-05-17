import React from 'react'
import Map from "./Map";
import './Admin.css'

export default class Admin extends React.Component {
    render() {



        return (<div className="admin" ><h1 id="texto1">Pantalla de administrador</h1>
                <Map></Map>
                <button className="createbutton"

                        onClick={(e) => console.log("Admin crea bicicleta")}>Crear bicicleta</button>
                <button className="modifybutton"

                        onClick={(e) => console.log("Admin modifica bicicleta")}>Modificar bicicleta</button>
                <button className="deletebutton"

                        onClick={(e) => console.log("Admin borra bicicleta")}>Borrar bicicleta</button>

            </div>



        );
    }
}