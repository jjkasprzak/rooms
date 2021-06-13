import React, {Component} from 'react'

import Loader from './Loader'
import Core from './Core'
class RoomsEngine extends Component
{
    constructor()
    {
        this.state =
        {
            gameData: null
        }
        this.setGameData = this.setGameData.bind(this)
    }

    render()
    {
        return (
        <div>
            { 
            this.state.gameData === null ? 
            <Loader load={this.setGameData}/> : 
            <Core game={gameData} exit={ ()=>this.setGameData(null) }/> 
            } 
        </div>
        );
    }

    setGameData(data)
    {
        this.setState(
            {
                gameData: data
            })
    }
}

export default RoomsEngine;
