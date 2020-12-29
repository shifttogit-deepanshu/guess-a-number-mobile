import React from "react"
import {View, Text,StyleSheet, Button,Image} from "react-native"
import DefaultStyles from "../Settings/defaultStyles"
import colors from "../Settings/colors"


const GameOverScreen = (props)=>{
    return (
        <View style={styles.screen}>
            <Text style={DefaultStyles.title}>Game Over!</Text>
            <View style={styles.imageContainer}><Image source={require('../assets/success.png')} style={styles.image} fadeDuration={1000}/></View> 
            <Text style={styles.endText}>      
            <Text>Your phone needed rounds: <Text style={styles.statText}> {props.rounds} </Text> To figure out </Text>
            <Text>The Number was: <Text style={styles.statText}>{props.number}</Text></Text>
            </Text>  
            <Button title="NEW GAME" onPress={props.newGameHandler}/>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    image:{
        width:"100%",
        height:"100%"

    },
    imageContainer:{
        width:300,
        height:300,
        borderWidth:0,
        borderRadius:150,
        overflow:"hidden",
        marginVertical:20,
        shadowColor:"black",
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.7,
        shadowRadius: 6,
        elevation: 8,
    },
    statText:{
        color:colors.primary,
        fontFamily:"openSansBold",
        
    },
    endText:{
        fontSize:20,
        margin:50,
        textAlign:"center"
    }

})

export default GameOverScreen