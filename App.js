import React,{useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from "./components/Header"
import StartGameScreen from "./screens/StartGameScreen"
import GameScreen from "./screens/GameScreen"

export default function App() {
  const [selectedNumber,setSelectedNumber] = useState()

  const handleSelectedNumber = (number)=>{
    setSelectedNumber(number)
  }

  return (
    <View style={styles.screen}>
      <Header/>
      {selectedNumber?<GameScreen userChoice={selectedNumber}/>:<StartGameScreen handleSelectedNumber={handleSelectedNumber}/>}
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    flex:1
  }
});