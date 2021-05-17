import React from 'react'

export default class Map extends React.Component {

    render()
    {
// console.log("finished")
// console.log(props)

        return(
            <div className="map">
                <img id='mapImagen' src={process.env.PUBLIC_URL + "/mapabicis.png"}/>

            </div>)
    }}
// <h1><iframe src="https://www.google.com/maps/d/embed?mid=1rHGFFanQShxZOKOvwjM4fik53CIUe927" width="480" height="360"></iframe></h1>