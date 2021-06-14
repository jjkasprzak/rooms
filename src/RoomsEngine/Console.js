import React, {Component} from 'react'

import './Console.css'
class Console extends Component{
    render(){
        let count = this.props.log.length
        count = count <= 8 ? 8 : count
        const log = this.props.log.map((text) => 
            <p className={"p"+count--}>
                {text}
            </p>)
        return (
        <div className="Console">
            {log}
        </div>)
    }

}
export default Console;