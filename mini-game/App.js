import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import StartGameScreen from './Screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './Screens/GameScreen';
import GameOverScreen from './Screens/GameOverScreen';

export default function App() {

  const[userNum,setUserNum]=useState();
  const[gameIsOver, setGAmeIsOver]=useState(true);

function pickedNumberHandler(pickednumber){
  setUserNum(pickednumber);
  setGAmeIsOver(false);
}

function gameOver() {
  setGAmeIsOver(true);
}

let screen= <StartGameScreen onPickNumber={pickedNumberHandler}/>

if(userNum){
  screen = <GameScreen usernumber={userNum} onGameOver={gameOver}/>
}
if(gameIsOver && userNum){
  screen= <GameOverScreen/>;
}


  return (
    <LinearGradient colors={['#ddb52f','#640233']} style={styles.rootscreen}>
      <ImageBackground 
      source={require('./assets/images/background.png')}
      resizeMode='cover'
      style={styles.rootscreen}
      imageStyle={styles.backgroundImage}>
        <SafeAreaProvider>
        <SafeAreaView style={styles.rootscreen}>
        {screen}
        </SafeAreaView>
        </SafeAreaProvider>
    </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootscreen:{
    flex:1,
    },
    backgroundImage:{
      opacity:0.15
    }
});
