import React,{useState,useEffect} from "react"
import {View, Text,StyleSheet, Button,Image,ScrollView,Dimensions} from "react-native"
import DefaultStyles from "../Settings/defaultStyles"
import colors from "../Settings/colors"


const GameOverScreen = (props)=>{
    const [layout,setLayout] = useState(Dimensions.get('window').width > Dimensions.get('window').height? 'Landscape':'portrait')

    useEffect(()=>{
        const updateLayout = ()=>{
            setLayout(Dimensions.get('window').width > Dimensions.get('window').height? 'Landscape':'portrait')
        }
    
        Dimensions.addEventListener('change',updateLayout)

        return ()=>{
            Dimensions.removeEventListener('change',updateLayout)
        }
    })

    return (
        <ScrollView>
        <View style={styles.screen}>
            <Text style={DefaultStyles.title}>Game Over!</Text>
            <View style={styles.imageContainer}><Image source={require('../assets/success.png')} style={styles.image} fadeDuration={1000}/></View> 
            <Text style={styles.endText}>      
            <Text>Your phone needed rounds: <Text style={styles.statText}> {props.rounds} </Text> To figure out </Text>
            <Text>The Number was: <Text style={styles.statText}>{props.number}</Text></Text>
            </Text>  
            <View style={{marginVertical:layout=='portrait'?0:20}}><Button title="NEW GAME" onPress={props.newGameHandler}/></View>
        </View>
        </ScrollView>
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
        width:Dimensions.get('window').width * 0.7,
        height:Dimensions.get('window').width * 0.7,
        borderWidth:0,
        borderRadius:Dimensions.get('window').width * 0.35,
        overflow:"hidden",
        marginVertical:Dimensions.get('window').width /20,
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
        margin:Dimensions.get('window').width /20,
        textAlign:"center"
    },

})

export default GameOverScreen
