import React from "react"
import {Text,View,StyleSheet} from "react-native"
import colors from "../Settings/colors"

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
        backgroundColor:colors.primary,
        alignItems:"center",
        justifyContent:"center"
    },
    headerTitle:{
        color:"black",
        fontSize:18
    }
})
