import React, {Component} from 'react'

class Console extends Component{
    render(){
        const log = this.props.log.map((text) => 
            <p>
                {text}
            </p>)
        return (
        <div>
            {log}
        </div>)
    }

}
export default Console;