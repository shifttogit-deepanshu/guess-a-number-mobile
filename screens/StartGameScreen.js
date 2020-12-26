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

import React,{useState} from "react"
import {View, Text,StyleSheet,Button} from "react-native"
import Card from "../components/Card"
import colors from "../Settings/colors"
import Input from "../components/Input"

const StartGameScreen = (props)=>{
    const [enteredValue,setEnteredValue] = useState('')
    return (
        <View style={styles.screen}>
        <Text style={styles.title}>Start A New Game!</Text>
        <Card style={styles.inputContainer}>
            <Text >Select A Number</Text>
            <Input style={styles.input} blurOnSubmit autocapitalize="none" maxLength={2} keyboardType="numeric"/>
            <View style={styles.buttonContainer}>
                <View style={styles.button}><Button title="Reset" color={colors.primary} /></View>
                <View style={styles.button}><Button title="confirm"color={colors.primary} /></View>
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
    },
    button:{
        width:90,
    },
    input:{
        width:50,
        textAlign:"center"
    }
})

export default StartGameScreen


