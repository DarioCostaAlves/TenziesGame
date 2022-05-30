import Die from './components/Die'

export default function App(){

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
                <Die value={1}/>
                <Die value={1}/>
                <Die value={1}/>
                <Die value={1}/>
                <Die value={1}/>
                <Die value={1}/>
                <Die value={1}/>
                <Die value={1}/>
                <Die value={1}/>
                <Die value={1}/>                
            </div>       
        </main>
    )
}