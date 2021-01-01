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

import React,{useState,useEffect} from "react"
import {View, Text,StyleSheet,Button,TouchableWithoutFeedback,Keyboard,Alert,Dimensions,ScrollView} from "react-native"
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
    const [buttonWidth,setButtonWidth] = useState(Dimensions.get('window').width/4)
    

    useEffect(()=>{
        Dimensions.addEventListener('change',updateLayout)

    const updateLayout = ()=>{
        setButtonWidth(Dimensions.get('window').width/4)
    }

    return ()=> {
        Dimensions.removeEventListener('change',updateLayout)
    }
    })
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
        <ScrollView>
        <TouchableWithoutFeedback onPress={()=>{
            Keyboard.dismiss()
        }}>
        <View style={styles.screen}>
        <Text style={styles.title}>Start A New Game!</Text>
        <Card style={styles.inputContainer}>
            <Text >Select A Number</Text>
            <Input style={styles.input} blurOnSubmit autocapitalize="none" maxLength={2} keyboardType="numeric" value={enteredValue} onChangeText={handleEnteredValue}/>
            <View style={styles.buttonContainer}>
                <View style={{width:buttonWidth}}><Button title="Reset" color={colors.primary} onPress={handleReset}/></View>
                <View style={{width:buttonWidth}}><Button title="confirm"color={colors.primary} onPress={handleConfirmed}/></View>
            </View>
        </Card>
        {confirmed && <Card style={styles.summaryContainer}>
        <Text>You Selected</Text>  
        <SelectedNumber>{selectedNumber}</SelectedNumber>  
        <Button title="START GAME" onPress={()=>props.handleSelectedNumber(selectedNumber)}/>    
        </Card>}
        </View>
        </TouchableWithoutFeedback>
        </ScrollView>
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
        marginVertical:15,
        fontFamily:'openSansBold'
    },
    inputContainer:{
        width:"80%",
        minWidth:300,
        maxWidth:"95%",
        alignItems:"center",

    },
    buttonContainer:{
        flexDirection:"row",
        width:"100%",
        justifyContent:"space-between",
        paddingHorizontal:15
    },
    // button:{
    //     width:Dimensions.get('window').width/4,
    // },
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


