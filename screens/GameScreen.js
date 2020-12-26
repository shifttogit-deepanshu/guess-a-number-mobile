import React,{useState} from "react"
import {View,Text,StyleSheet,Button,Alert} from "react-native"
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
    
    const handleNextGuess = direction=>{
        if((direction=="lower" && guessedNumber<props.userChoice) || (direction=="greater" && guessedNumber>props.userChoice)){
            Alert.alert("Don't Lie","You know this is wrong!...",[{text:"Sorry",style:"cancel"}])
        }
    }
    
    return (
        <View style={styles.screen}>
            <Text>Opponent's Choice</Text>
            <SelectedNumber>{guessedNumber}</SelectedNumber>
            <Card style={styles.buttonContainer}>
                <Button title="Lower" color={colors.primary} onPress={handleNextGuess.bind(this,"lower")}/>
                <Button title="Greater" onPress={handleNextGuess.bind(this,"greater")}/>
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