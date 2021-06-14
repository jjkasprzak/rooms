import React, {Component} from 'react'

import Game from './Game'
import './RoomsEngine.css'
class RoomsEngine extends Component{
    constructor(props){
        super(props)

        fetch("gameData.json").then(r=> r.json()).then(data => this.setGameData(data))
        this.state ={
            gameData: null
        }
        this.setGameData = this.setGameData.bind(this)
    }

    render(){
        return ( this.state.gameData === null ? <h1>Loading...</h1> : <Game game={this.state.gameData}/> )
    }

    setGameData(data){
        this.setState({
                gameData: data
            })
    }
}

export default RoomsEngine;
