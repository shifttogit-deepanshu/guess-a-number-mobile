//Boilerplate----------------------------------------------------------------------------------

// import React from "react"
// import {View, Text,StyleSheet} from "react-native"

// const StartGameScreen = ()=>{
//     return (
//         <View></View>
//     )
// }

// const styles = StyleSheet.create({
    
// })

// export default StartGameScreen

//---------------------------------------------------------------------------------------------

import React from "react"
import {View, Text,StyleSheet, TextInput,Button} from "react-native"
import Card from "../components/Card"

const StartGameScreen = (props)=>{
    return (
        <View style={styles.screen}>
        <Text style={styles.title}>Start A New Game!</Text>
        <Card style={styles.inputContainer}>
            <Text >Select A Number</Text>
            <TextInput/>
            <View style={styles.buttonContainer}>
                <Button title="Reset"/>
                <Button title="confirm"/>
            </View>
        </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:"center",
        justifyContent:"flex-start",

    },
    title:{
        fontSize:20,
        marginVertical:15
    },
    inputContainer:{
        width:300,
        maxWidth:"80%",
        alignItems:"center",

    },
    buttonContainer:{
        flexDirection:"row",
        width:"100%",
        justifyContent:"space-between",
        paddingHorizontal:15
    }
})

export default StartGameScreen


