import React, {useState, useEffect} from 'react'

import Game from './Game'
import './RoomsEngine.css'

export const RoomsEngine = (props) => {
    const [gameData, setGameData] = useState(null)
    useEffect(() => {
        fetch("gameData.json").then(r=> r.json()).then(data => setGameData(data))
    }, [])

    return (
        gameData === null ? <h1>Loading...</h1> : <Game game={gameData}/>
    )
}
