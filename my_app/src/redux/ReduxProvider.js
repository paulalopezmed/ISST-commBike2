import {bicicletas} from "../assets/mock-data"
import { Provider } from 'react-redux';
import GlobalState from './reducers';
import { createStore } from 'redux';
import React from 'react';
import App from '../components/App';
export default class ReduxProvider extends React.Component {
    constructor(props) {
        super(props);
        this.initialState = {
            //
            registros:[],
            currentRecord:0,
            currentBike: 0,
            time: 0,
            locked: true,
            finalizado: false,
            variableRegistro: false,
            usuario:"",
            usuarios:[],
            role:"",

             bicicletas: []
        };
        this.store = this.configureStore();
    }
    render() {
        return (
            <Provider store={ this.store }>
                <div style={{ height: '100%' }} >
                    <App/>
                </div>
            </Provider>
        );
    }
    configureStore() {
        return createStore(GlobalState, this.initialState);
    }
}
