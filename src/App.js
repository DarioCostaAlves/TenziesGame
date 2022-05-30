import React,{useState} from 'react'
import Die from './components/Die'

export default function App(){

    const [allNumber, setAllNumbers] = useState(allNewDice())

    const diceElements = allNumber.map(function(number, i){
        return <Die key={i} value={number}/>
    })

    function allNewDice(){

        const newDice = []
        
        for(let i = 0; i < 10; i++){
            newDice.push(Math.ceil(Math.random() * 6))
        }
        return newDice
    }
    console.log(allNewDice())
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
            <button className="rollButton">Roll</button>
        </main>
    )
}