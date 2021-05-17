import { combineReducers} from "redux";
import {
    SELECT_BIKE,
    START_TIMER,
    STOP_TIMER,
    MAIN,
    VERIFICACION,
    RESET_TIMER,
    INIT_USUARIOS,
    INIT_BICICLETAS,
    INIT_REGISTROS,
    ADD_RECORD,
    UPDATE_RECORD,
    REGISTRO,
    nuevoUsu, NUEVO_USU
} from "./actions"
import {bicicleta} from "../assets/mock-data";


function finalizado(state =false,action = {}){
    switch (action.type) {

        case UPDATE_RECORD:
            return state = true
        case MAIN:
            return state = false



        default:
            return state;
    }
}

function time(state =0,action = {}){
    switch (action.type) {
        case START_TIMER:
            // time = setInterval(() => {
            //     this.setState({state: this.state +1});
            // }, 1000);
            // return time
                return state = 3
        case STOP_TIMER:
            return state = 0
        case MAIN:
            return state=0


        default:
            return state;
    }
}
function locked(state =true,action = {}){
    switch (action.type) {
        case ADD_RECORD:
            return state= false


        case MAIN:
            return state=false

        default:
            return state;
    }
}

function currentBike(state =0,action = {}){
    switch (action.type) {
        case SELECT_BIKE:
            var ID = action.payload.bicicletas.findIndex(obj => obj.bikeCode === action.payload.code)

           if (ID>=0 && ID<=9){
               // action.payload.bicicletas[ID].bikeCoordenates[1]=0
               // bicicleta bike
               //action.payload.bicicletas[ID].available = false
               //action.payload.registro[ID].originTime= Date().getTime
               //fetch(https://localhost:8080/commBike/rest/bicicletas/ID)

               action.payload.bicicletas[ID].available = false
               return ID
           }else{
               alert('Codigo incorrecto');
               return state=0
           }




        case MAIN:
            state=0

        default:
            return state;
    }
}
function registros(state =[],action = {}){
    switch (action.type) {
        case INIT_REGISTROS:
            return action.payload.registros;
        case ADD_RECORD:
            return action.payload.registros;



        default:
            return state;
    }
}
function currentRecord(state =[],action = {}){
    switch (action.type) {
        case ADD_RECORD:
            console.log("Regsiytros y bicicletas en add record")
            var ID = action.payload.bicicletas.findIndex(obj => obj.bikeCode === action.payload.code)
            console.log(action.payload.bicicletas[ID].bikeCoordenatesX)
            var bikeCodeID= action.payload.registros.length
            console.log(bikeCodeID)

            var reg = {
                "recordCode":String(bikeCodeID),
                "bikeCode":action.payload.code,
                "originBikeCoordenatesX":action.payload.bicicletas[ID].bikeCoordenatesX,
                "originBikeCoordenatesY":action.payload.bicicletas[ID].bikeCoordenatesY,
                "endBikeCoordenatesX":0,
                "endBikeCoordenatesY":0,
                "originTime":new Date().getTime(),
                "endTime":0,
                "time":0,
                "precio":0
            }
            action.payload.registros.push(reg)
            // console.log("aquiiiiii"+action.payload.bicicletas)
            // console.log(action.payload.code)
            // console.log(action.payload.registros)
            console.log("reg")
            console.log(reg)
            console.log(action.payload.registros)



        // fetch('http://localhost:8080/commBike/rest/registros', {
        //     method: "POST",
        //     headers:{
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json',
        //
        //     },
        //     body: JSON.stringify(action.payload.registros)
        //     // body: JSON.stringify(action.payload.registros)
        // })
        //     .then(response => response.json())
        //
        //     .then(json => console.log(json))
        //      .catch(err => console.log(err))

        // Registro registro = new Registro()
        // http://localhost:8080/commBike/rest/registro
        // registro.bikeCode= action.payload.code
        // registro.originBikeCoordenatesX = action.payload.bicicletas.bikeCoordenatesX
        // registro.originBikeCoordenatesX = action.payload.bicicletas.bikeCoordenatesY
        // registro.originTime= new Date()
        // registro.endBikeCoordenatesX=0
        // registro.endBikeCoordenatesY=0
        // registro.endTime=0
        // registro.precio=0
        // registro.time=0
        // action.payload.registros
        // return registro;
            return bikeCodeID
        case UPDATE_RECORD:
            console.log("Regsiytros y bicicletas en add record")
            var RecordId = action.payload.registros[action.payload.registros.length]
            console.log(action.payload.registros.length)
            console.log(RecordId)
            var ID = action.payload.bicicletas.findIndex(obj => obj.bikeCode === action.payload.code)
            console.log(action.payload.bicicletas[ID].bikeCoordenatesX)
            var bikeCodeID= action.payload.registros.length
            console.log(bikeCodeID)
            console.log(action.payload.registros)
            //action.payload.registros[action.payload.registros.length-1].endBikeCoordenatesX = action.payload.bicicletas[ID].bikeCoordenatesX
            action.payload.registros[action.payload.registros.length-1].endBikeCoordenatesX = (Math.random() * (40.55 - 40.30 + 1)) + 40.30
            //action.payload.registros[action.payload.registros.length-1].endBikeCoordenatesY = action.payload.bicicletas[ID].bikeCoordenatesY
            action.payload.registros[action.payload.registros.length-1].endBikeCoordenatesY = (Math.random() * (-3.77 - -3.60 + 1)) + -3.60
            action.payload.registros[action.payload.registros.length-1].endTime = new Date().getTime()
            action.payload.registros[action.payload.registros.length-1].time =  action.payload.registros[action.payload.registros.length-1].endTime-action.payload.registros[action.payload.registros.length-1].originTime
            // action.payload.registros[action.payload.registros.length-1].precio = 0.00001*action.payload.registros[action.payload.registros.length-1].time
            action.payload.registros[action.payload.registros.length-1].precio = parseFloat((0.00001*action.payload.registros[action.payload.registros.length-1].time).toFixed(2))

            console.log("estos son mis regstros")
            console.log(action.payload.registros)
            // fetch('http://localhost:8080/commBike/rest/registros', {
            //     method: "POST",
            //     headers:{
            //         'Content-Type': 'application/json',
            //         'Accept': 'application/json',
            //
            //     },
            //     body: JSON.stringify(action.payload.registros)
            //     // body: JSON.stringify(action.payload.registros)
            // })
            //     .then(response => response.json())
            //
            //     .then(json => console.log(json))
            //     .catch(err => console.log(err))

            return 1
        case MAIN:
            state=[]

        default:
            return state;
    }
}
function bicicletas(state =[],action = {}){
    switch (action.type) {
        case INIT_BICICLETAS:
            return action.payload.bicicletas;



        default:
            return state;
    }
}
function usuarios(state =[],action = {}){
    switch (action.type) {
        case INIT_USUARIOS:
            return action.payload.usuarios;
        case NUEVO_USU:
            console.log(action.payload.username)
                 var usu = {"nombre": action.payload.userName, "password": action.payload.password, "role": "user"}

            action.payload.usuarios.push(usu)
        //     var usu = {"nombre": action.payload.username, "password": action.payload.password, "role": "user"}
        //
        // fetch('http://localhost:8080/commBike/rest/usuarios', {
        //     method: "POST",
        //     headers:{
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json',
        //
        //     },
        //     body: JSON.stringify(usu)
        //     // body: JSON.stringify(action.payload.registros)
        // })
        //     .then(response => response.json())
        //
        //     .then(json => console.log(json))
        //     .catch(err => console.log(err))
            return action.payload.usuarios;

        default:
            return state;
    }
}
function variableRegistro(state =false,action = {}){
    switch (action.type) {
        case REGISTRO:
            return !state;

        case VERIFICACION:
            console.log(action.payload.userName)
            var ID = action.payload.usuarios.findIndex(obj => obj.nombre === action.payload.userName)

            if(ID !== -1 && action.payload.password===action.payload.usuarios[ID].password)
                return !state;
            else{
                return state;
            }
        case MAIN:
            return state=false;
        case NUEVO_USU:
            return !state;

        default:
            return state;
    }
}
function usuario(state ="",action = {}){
    switch (action.type) {
        case VERIFICACION:
            console.log(action.payload.userName)
            var ID = action.payload.usuarios.findIndex(obj => obj.nombre === action.payload.userName)
            console.log("este es el id de usuario")
            console.log(ID)
            if(ID !== -1 && action.payload.password===action.payload.usuarios[ID].password){
                return state=action.payload.userName;
                console.log(action.payload.userName)}

            else{
                alert('Usuario incorrecto');
                return state;
            }
        case NUEVO_USU:
            return state=action.payload.userName;
        case MAIN:
            return state="";

        default:
            return state;
    }
}
function role(state =[],action = {}){
    switch (action.type) {
        case VERIFICACION:
            console.log(action.payload.userName)
            var ID = action.payload.usuarios.findIndex(obj => obj.nombre === action.payload.userName)
            console.log("este es el id de usuario")
            console.log(ID)
            if(ID !== -1 && action.payload.password===action.payload.usuarios[ID].password){
                return state=action.payload.usuarios[ID].role
                console.log(action.payload.userName)}

            else{
                alert('Usuario incorrecto');
                return state;
            }
        case MAIN:
            return state="";

        default:
            return state;
    }

}


const GlobalState = (combineReducers({
    bicicletas,
    currentBike,
    time,
    locked,
    finalizado,
    variableRegistro,
    usuario,
    registros,
    currentRecord,
    usuarios,
    role

}));

export default GlobalState;
