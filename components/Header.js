import React from "react"
import {Text,View,StyleSheet} from "react-native"

const Header = ()=>(
    <View style={styles.header}>
        <Text style={styles.headerTitle}> Guess A Number</Text>
    </View>
)

export default Header

const styles = StyleSheet.create({
    header:{
        width:"100%",
        height:90,
        paddingTop:36,
        backgroundColor:"#f7287b",
        alignItems:"center",
        justifyContent:"center"
    },
    headerTitle:{
        color:"black",
        fontSize:18
    }
})
