import React, {Component} from 'react'

import Console from './Console'
class Game extends Component{
    constructor(props){
        super(props)

        const entry= this.props.game.rooms[0].onEnter 
        const initialLog = entry === null ? [] : [entry];
        this.state = {
            cRoom: 0,
            log: initialLog
        }

        this.addEntry = this.addEntry.bind(this);
    }

    render(){
        return (
        <div>
            <Console log={this.state.log}/>
        </div>)
    }

    addEntry(entry){
        this.setState({
            log: [
                entry,
                ...this.state.log.slice(0,7)
            ]
        })
    }
}
export default Game;