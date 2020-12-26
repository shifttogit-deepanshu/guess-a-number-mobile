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
import {View, Text,StyleSheet,Button,TouchableWithoutFeedback,Keyboard,Alert} from "react-native"
import Card from "../components/Card"
import colors from "../Settings/colors"
import Input from "../components/Input"
import SelectedNumber from "../components/SelectedNumber"

const StartGameScreen = (props)=>{
    const [enteredValue,setEnteredValue] = useState('')
    const [confirmed,setConfirmed] = useState(false)
    const [selectedNumber,setSelectedNumber] = useState('')
    const handleEnteredValue=(inputText)=>{
        setEnteredValue(inputText.replace(/[^0-9]/g,''))
    }
    const handleReset = ()=>{
        setEnteredValue('')
        setConfirmed(false)
    }
    const handleConfirmed = ()=>{
        const chosenValue = parseInt(enteredValue)
        if(isNaN(chosenValue) || chosenValue<=0 || chosenValue>99){
            Alert.alert('Invalid Number!','The number should be between 1 and 99',[{text:'okay', style:'destructive',onPress:handleReset}])
            return
        }
        setConfirmed(true)
        setSelectedNumber(chosenValue)
        setEnteredValue('')
        Keyboard.dismiss()
    }
    return (
        <TouchableWithoutFeedback onPress={()=>{
            Keyboard.dismiss()
        }}>
        <View style={styles.screen}>
        <Text style={styles.title}>Start A New Game!</Text>
        <Card style={styles.inputContainer}>
            <Text >Select A Number</Text>
            <Input style={styles.input} blurOnSubmit autocapitalize="none" maxLength={2} keyboardType="numeric" value={enteredValue} onChangeText={handleEnteredValue}/>
            <View style={styles.buttonContainer}>
                <View style={styles.button}><Button title="Reset" color={colors.primary} onPress={handleReset}/></View>
                <View style={styles.button}><Button title="confirm"color={colors.primary} onPress={handleConfirmed}/></View>
            </View>
        </Card>
        {confirmed && <Card style={styles.summaryContainer}>
        <Text>You Selected</Text>  
        <SelectedNumber>{selectedNumber}</SelectedNumber>  
        <Button title="START GAME"/>    
        </Card>}
        </View>
        </TouchableWithoutFeedback>
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
    },
    summaryContainer:{
        marginTop:20,
        alignItems:"center",
    }
})

export default StartGameScreen


