import React,{useState} from "react"
import {View,Text,StyleSheet} from "react-native"


const generateRandomBetween = (min,max,exclude)=>{
    const min = Math.ceil(min)
    const max= Math.floor(max)

    const randomN = min + Math.floor(Math.random()*(max-min))

    if(randomN === exclude){
        return generateRandomBetween(min,max,exclude)
    }
    else{
        return randomN
    }
}


const GameScreen = ()=>{
    const [guessedNumber,setGuessedNumber] = useState(generateRandomBetween(1,100,props.userChoice))
}


const styles = StyleSheet.create({

})