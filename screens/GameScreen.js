import React,{useState} from "react"
import {View,Text,StyleSheet,Button} from "react-native"
import Card from "../components/Card"
import SelectedNumber from "../components/SelectedNumber"
import colors from "../Settings/colors"


const generateRandomBetween = (min,max,exclude)=>{
    min = Math.ceil(min)
    max = Math.floor(max)

    const randomN = min + Math.floor(Math.random()*(max-min))

    if(randomN === exclude){
        return generateRandomBetween(min,max,exclude)
    }
    else{
        return randomN
    }
}


const GameScreen = (props)=>{
    const [guessedNumber,setGuessedNumber] = useState(generateRandomBetween(1,100,props.userChoice))

    return (
        <View style={styles.screen}>
            <Text>Opponent's Choice</Text>
            <SelectedNumber>{guessedNumber}</SelectedNumber>
            <Card style={styles.buttonContainer}>
                <Button title="Lower" color={colors.primary}/>
                <Button title="Greater"/>
            </Card>
        </View>
    )
}

export default GameScreen

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:"center"
    },
    buttonContainer:{
        flexDirection:"row",
        width:300,
        maxWidth:"80%",
        justifyContent:"space-around",
        alignItems:"center"
    }

})