function padDigits(number, requiredDigits){
    let numberStr = number.toString()
    if(numberStr.length >= requiredDigits){
        return number
    }
    return "0".repeat(requiredDigits - numberStr.length) + number
}

export function formatTime(time) {
    return{
        minutes: padDigits(Math.floor(time/60000), 2),
        seconds: padDigits(Math.floor((time/1000) % 60), 2),
        milliseconds: padDigits(Math.floor((time/10) % 100), 2),
    }
}