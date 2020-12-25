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

const StartGameScreen = (props)=>{
    return (
        <View style={styles.screen}>
        <Text style={styles.title}>Start A New Game!</Text>
        <View style={styles.inputContainer}>
            <Text >Select A Number</Text>
            <TextInput/>
            <View style={styles.buttonContainer}>
                <Button title="Reset"/>
                <Button title="confirm"/>
            </View>
        </View>
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
        shadowColor:"black",
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.5,
        shadowRadius: 6,
        elevation: 8,
        backgroundColor:"white",
        padding:20,
        borderRadius:10
    },
    buttonContainer:{
        flexDirection:"row",
        width:"100%",
        justifyContent:"space-between",
        paddingHorizontal:15
    }
})

export default StartGameScreen


