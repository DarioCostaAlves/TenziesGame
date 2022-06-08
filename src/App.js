import React,{useState, useEffect} from 'react'
import Die from './components/Die'
import {nanoid} from "nanoid"

export default function App(){

    const [dice, setDice] = useState(allNewDice())
    const [tenzies, setTenzies] = useState(false)

    useEffect(() =>{
        const allDiceHeld = dice.every(item => item.isHeld)
        const allEqual = dice.every( item => item.value === dice[0].value )

        if(allEqual && allDiceHeld){
            setTenzies(true)
            console.log("You won!")
        }        

    }, [dice])

    const diceElements = dice.map(die => (
        <Die
            key={die.id}
            value={die.value}
            isHeld={die.isHeld}
            holdDice={() => holdDice(die.id)}
        />
    ))

    function generateNewDie(){
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid()
        }
    }

    function allNewDice(){

        const newDice = []
        
        for(let i = 0; i < 10; i++){
            newDice.push(generateNewDie())
        }        
        return newDice
    }

    function rollDice(){
        setDice(oldDice => oldDice.map(die => {
            return die.isHeld ? die : generateNewDie()
        }))
    }
    // console.log(allNewDice())
    function holdDice(id){
        // console.log(id)
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