export const SELECT_BIKE = 'SELECT_BIKE'
export const START_TIMER = 'START_TIMER'
export const STOP_TIMER ="STOP_TIMER"
export const RESET_TIMER ="RESET_TIMER"
export const MAIN ="MAIN"
export const FINISH ="FINISH"
export const INIT_BICICLETAS='INIT_BICICLETAS'
export const REGISTRO='REGISTRO'
export const VERIFICACION='VERIFICACION'
export const ADD_RECORD='ADD_RECORD'
export const INIT_REGISTROS='INIT_REGISTROS'
export const UPDATE_RECORD='UPDATE_RECORD'
export const INIT_USUARIOS='INIT_USUARIOS'
export const NUEVO_USU='NUEVO_USU'


export function selectBike (code,bicicletas) {
    return {type: SELECT_BIKE, payload: {code,bicicletas}};
}
export function finish () {
    return {type: FINISH, payload: {}};
}
export function initRegistros (registros) {
    return {type: INIT_REGISTROS, payload: {registros}};
}
export function addRecord (code,registros,bicicletas) {
    return {type: ADD_RECORD, payload: {code,registros,bicicletas}};
}
export function initBicicletas (bicicletas) {
    return {type: INIT_BICICLETAS, payload: {bicicletas}};
}
export function initUsuarios (usuarios) {
    return {type: INIT_USUARIOS, payload: {usuarios}};
}
export function updateRecord (code,registros,bicicletas) {
    return {type: UPDATE_RECORD, payload: {code,registros,bicicletas}};
}

export function startTimer () {
    return {type: START_TIMER, payload: {}};
}
export function stopTimer () {
    return {type: STOP_TIMER, payload: {}};
}
export function resetTimer () {
    return {type: RESET_TIMER, payload: {}};
}
export function main (bicicletas) {
    return {type: MAIN, payload: {bicicletas}};
}
export function registro (userName, password) {
    return {type: REGISTRO, payload: {userName, password}};
}
export function nuevoUsu (userName, password,usuarios) {
    return {type: NUEVO_USU, payload: {userName, password,usuarios}};
}

export function verificacion (userName, password,usuarios) {
    return {type: VERIFICACION, payload: {userName, password,usuarios}};
}
//accion que modifica el cadado electronico