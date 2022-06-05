import React,{useState} from 'react'
import Die from './components/Die'
import {nanoid} from "nanoid"

export default function App(){

    const [dice, setDice] = useState(allNewDice())

    const diceElements = dice.map(function(dice, i){
        return <Die key={dice.id} value={dice.value} 
        holdDice={() => holdDice(dice.id)}
        />
    })

    function allNewDice(){

        const newDice = []
        
        for(let i = 0; i < 10; i++){
            newDice.push({
                value: Math.ceil(Math.random() * 6),
                isHeld: false,
                id: nanoid()
            })
        }
        console.log(newDice)
        return newDice
    }

    function rollDice(){
        setDice(allNewDice())
    }
    // console.log(allNewDice())
    function holdDice(id){
        console.log(id)
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ? {...die, isHeld: !die.isHeld} : die
        }))

    }

    return(
        <main className="mainSquare">
            <div className="instructionsSquare">
                <h1 className="titleSquare">Tenzies</h1>
                <p className="descriptionSquare">
                    Roll until all dice are the same. 
                    Click each die to freeze it at its current value between rolls. 
                </p>
            </div>
            <div className="dieGame">
                {diceElements}               
            </div>       
            <button onClick={() => rollDice()} className="rollButton">Roll</button>
        </main>
    )
}