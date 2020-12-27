import React,{useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from "./components/Header"
import StartGameScreen from "./screens/StartGameScreen"
import GameScreen from "./screens/GameScreen"
import GameOverScreen from "./screens/GameOverScreen"

export default function App() {
  const [selectedNumber,setSelectedNumber] = useState()
  const [gameOverRound,setGameOverRound] = useState(0)

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