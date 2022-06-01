export default function Die(props){
    return(
        <div className={props.isHeld ? "dieGameCardIsHeld" : "dieGameCard"} onClick={props.holdDice}>
            {props.value}
        </div>
    )
}