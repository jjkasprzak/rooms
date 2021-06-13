import React, {Component} from 'react'

class RoomsEngine extends Component{
    constructor(props){
        super(props)

        fetch("Game.json").then(r=> r.json()).then(data => this.setGameData(data))
        this.state ={
            gameData: null
        }
        this.setGameData = this.setGameData.bind(this)
    }

    render(){
        return (
        <div>
            {
                this.state.gameData === null ?
                <h1>Loading...</h1> :
                <h1> {this.state.gameData.name} </h1>
            }
        </div>
        );
    }

    setGameData(data){
        this.setState({
                gameData: data
            })
    }
}

export default RoomsEngine;
