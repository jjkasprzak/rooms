import React, {Component} from 'react'

import Console from './Console'
import ActionBar from './ActionBar'
class Game extends Component{
    constructor(props){
        super(props)
        
        const initialLog = [this.props.game.rooms[0].onEnter].filter((item) => item !== null)

        this.state = {
            log: initialLog,
            room: this.props.game.rooms[0]
        }

        this.perform= this.perform.bind(this);
    }

    render(){
        return (
        <div>
            <Console log={this.state.log}/>
            <ActionBar actions={this.state.room.actions} onAction={this.perform}/>
        </div>)
    }

    perform(action){
        let targetRoomName = action.target
        if(targetRoomName.isArray())
        {
            let shot = Math.random()*100
            let tmp=0
            let hit=false;

            action.target.forEach((item)=>{
                tmp+=item[0]
                if(!hit && shot < tmp)
                {
                    targetRoomName = item[1]
                    hit=true
                }
            })
        }

        const nextRoom = this.props.game.rooms.filter((room)=> room.name === targetRoomName)[0]
        let newlog = [
            nextRoom.onEnter,
            this.state.room.onExit,
            ...this.state.log].filter((item) => item !== null)

        this.setState({
            log: newlog.slice(0,8),
            room: nextRoom
        })

    }
}
export default Game;