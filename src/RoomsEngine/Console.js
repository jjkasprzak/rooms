import React, {Component} from 'react'

import './Console.css'
class Console extends Component{
    render(){
        const log = this.props.log.map((text) => 
            <p>
                {text}
            </p>)
        return (
        <div className="Console">
            <div className="FadeOut"></div>
            <div className="Log">
                {log}
            </div>
        </div>)
    }

}
export default Console;