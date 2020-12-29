import React from "react"
import {View, Text,StyleSheet, Button} from "react-native"
import DefaultStyles from "../Settings/defaultStyles"


const GameOverScreen = (props)=>{
    return (
        <View style={styles.screen}>
            <Text style={DefaultStyles.default}>Game Over!</Text>
            <Text>Number of rounds: {props.rounds}</Text>
            <Text>The Number was: {props.number}</Text>
            <Button title="NEW GAME" onPress={props.newGameHandler}/>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }

})

export default GameOverScreen