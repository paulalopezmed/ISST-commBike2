import React from 'react'
import {bicicletas} from "../assets/mock-data";
import './Code.css'

export default class Code extends React.Component {

    constructor(props){
        super(props);
        this.state = { inputValue: '' };
    }
    updateInputValue = evt => {

        this.setState({
            inputValue: evt.target.value
        });
    }

    render() {
        console.log("CODE")
        console.log(this.props)

        console.log(this.state.inputValue)
        // console.log(this.props.quiz)
        return (
            <div>
                <h1>
                    <input type="text"  placeholder="Enter bike code"
                           value={this.state.inputValue}
                           onChange={this.updateInputValue}/>
                </h1>
                <button className="selectbutton"
                        onClick = {(e) =>this.props.onSelectBike(this.state.inputValue,bicicletas)}
                >Seleccionar</button>


            </div>
        );

    }


}


// onClick ={(e) =>this.props.onstartTimer()}

// <input type="text"  placeholder="Enter bike code"
//        value={this.props.currentBike || ''}
//        onChange={(e) =>this.props.onSelectBike(e.target.value)}/>
// <input type="text"  placeholder="Enter bike code"
//        value={this.props.currentBike}
//        onChange={(e) =>this.props.onSelectBike(e.target.value)}/>
//
// <button className="selectbutton"
//         onClick = {(e) =>this.props.onSelectBike(e.target.value)}
//         onClick ={(e) =>this.props.onstartTimer()}>Seleccionar</button>