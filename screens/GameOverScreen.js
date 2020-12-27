import React from "react"
import {View, Text,StyleSheet, Button} from "react-native"

const GameOverScreen = (props)=>{
    return (
        <View>
            <Text>Game Over!</Text>
            <Text>Number of rounds: {props.rounds}</Text>
            <Text>The Number was: {props.number}</Text>
            <Button title="NEW GAME" onPress={props.newGameHandler}/>
        </View>
    )
}

const styles = StyleSheet.create({
    
})

export default GameOverScreen