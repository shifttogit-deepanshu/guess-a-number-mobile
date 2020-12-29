import React,{useState} from 'react'
import { StyleSheet,View } from 'react-native'
import * as Font from 'expo-font'
import AppLoading from "expo-app-loading"

import Header from "./components/Header"
import StartGameScreen from "./screens/StartGameScreen"
import GameScreen from "./screens/GameScreen"
import GameOverScreen from "./screens/GameOverScreen"


const fetchFonts = ()=>{
  return Font.loadAsync({
    'openSans': require('./assets/Fonts/OpenSans-Regular.ttf'),
    'openSansBold': require('./assets/Fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {
  const [selectedNumber,setSelectedNumber] = useState()
  const [gameOverRound,setGameOverRound] = useState(0)
  const [dataLoaded,setDataLoaded] = useState(false)
  // let [fontsLoaded] = useFonts({
  //   openSans: require('./assets/Fonts/OpenSans-Regular.ttf'),
  //   openSansBold: require('./assets/Fonts/OpenSans-Bold.ttf')
  // })

  if(!dataLoaded){
    return <AppLoading startAsync={fetchFonts} onFinish={()=>setDataLoaded(true)} onError={(err)=>console.log(err)}/>
  }

  const handleStartGame = (number)=>{
    setSelectedNumber(number)
  }
  const handleGameOver = (gameOver)=>{
    setGameOverRound(gameOver)
  }

  const newGameHandler = ()=>{
    setGameOverRound(0)
    setSelectedNumber(null)
  }

  let content = <StartGameScreen handleSelectedNumber={handleStartGame}/>
  content = <GameOverScreen rounds={1} number={1} newGameHandler={newGameHandler}/>
  if(selectedNumber && gameOverRound<=0){
    content = <GameScreen userChoice={selectedNumber} handleGameOver={handleGameOver}/>
  }
  else if(gameOverRound>0){
    content = <GameOverScreen rounds={gameOverRound} number={selectedNumber} newGameHandler={newGameHandler}/>
  }

  return (
    <View style={styles.screen}>
      <Header/>{content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    flex:1
  }
});