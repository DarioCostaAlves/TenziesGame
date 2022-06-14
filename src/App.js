import React,{useState, useEffect} from 'react'
import Die from './components/Die'
import Timer from './components/Count'
import Results from './components/Results'
import {nanoid} from "nanoid"
import Confetti from 'react-confetti'
import {
    useWindowSize,    
  } from '@react-hook/window-size'

export default function App(props){

    //Get window size
    const [width, height] = useWindowSize()

    const [dice, setDice] = useState(allNewDice())
    const [tenzies, setTenzies] = useState(false)    
    
    const [hasStarted, setHasStarted] = useState(() => false)
    const[time, setTime] = useState(0)

    const [bestTime, setBestTime] = useState(() =>
    localStorage.getItem("best-time")
        ? parseInt(localStorage.getItem("best-time"))
        : ""
    );

    useEffect(() =>{
        let interval = null

        if(hasStarted && !tenzies){
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 10);
        }
        return () => clearInterval(interval);
    }, [tenzies, hasStarted])

    useEffect(() =>{
        const allDiceHeld = dice.every(item => item.isHeld)
        const allEqual = dice.every( item => item.value === dice[0].value )                             

        if(allEqual && allDiceHeld){                   
            setTenzies(true)
            console.log("You won!")
            if (time < bestTime || !bestTime) {
                setBestTime(time);
                localStorage.setItem("best-time", time.toString());
            }
        }                               

    }, [dice, time])


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
            value: Math.ceil(Math.random() * 2),
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
        if (!tenzies){
            setHasStarted(true)
            setDice(oldDice => oldDice.map(die => {
                return die.isHeld ? die : generateNewDie()
            }))
        }
        else{
            setHasStarted(false)
            setTime(0)
            setTenzies(false)
            setDice(allNewDice())
        }
        
    }
    // console.log(allNewDice())
    function holdDice(id){
        setHasStarted(true)
        // console.log(id)
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ? {...die, isHeld: !die.isHeld} : die
        }))

    }        

    return(

        <>
            {tenzies && 
                <Confetti
                width={width}
                height={height}
                />
            }
            <main className="mainSquare">
                <div className="instructionsSquare">
                    <h1 className="titleSquare">Tenzies</h1>
                    <p className="descriptionSquare">
                        Roll until all dice are the same. 
                        Click each die to freeze it at its current value between rolls.                         
                    </p>
                </div>
                <div className="tenziesTime">
                    <Timer time={time}/>
                </div>                
                <div className="dieGame">
                    {diceElements}               
                </div>       
                <button onClick={() => rollDice()} className="rollButton">
                    {tenzies ? "New Game" : "Roll"}
                </button>                
                <Results time={bestTime}/>
            </main>
        </>
    )
}