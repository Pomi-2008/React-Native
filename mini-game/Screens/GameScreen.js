import { Text,View, StyleSheet, Alert } from 'react-native';
import Title from '../components/Title';
import { useEffect, useState } from 'react';
import NumberContainer from '../components/Game/NumberContainer';
import PrimaryButton from "../components/PrimaryButton";
 function GenerateRandomNumberBetween(min,max,exclude){
            const rndNum =  Math.floor(Math.random() * (max - min + 1)) + min;

            if(rndNum === exclude) {
                return GenerateRandomNumberBetween(min, max, exclude);
            }
            else {
                return rndNum;
            }
        }

let minboundary=1;
let maxboundary=100;

function GameScreen({usernumber,onGameOver}){
    const initialGuess = GenerateRandomNumberBetween(1,100,usernumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    useEffect (()=>{
        if(currentGuess === usernumber) 
        {
            onGameOver();
        }
    },[currentGuess,usernumber,onGameOver]);
    function nextGuessHandlet(direction){

         if (
    (direction === "lower" && currentGuess < usernumber) ||
    (direction === "greater" && currentGuess > usernumber)
  ) {
    Alert.alert(
      "Don't Lie!",
      "Your hint is incorrect.",
      [{ text: "Sorry", style: "cancel" }]
    );
    return;
  }

  if (direction === "lower") {
    maxboundary = currentGuess - 1;  
  } else {
    minboundary = currentGuess + 1;
  }

  if (minboundary > maxboundary) {
    Alert.alert(
      "Invalid Range",
      "No numbers left to guess!"
    );
    return;
  }

  const newRndNum = GenerateRandomNumberBetween(
    minboundary,
    maxboundary,
    currentGuess
  );
  setCurrentGuess(newRndNum);
};
    return(
        <View style={styles.screen}>
            <Title>Opponents Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                 <Text>Higher or lower?</Text>
                 <View> 
                    <PrimaryButton onPress={nextGuessHandlet.bind(this,'lower')}>-</PrimaryButton>
                 <PrimaryButton onPress={nextGuessHandlet.bind(this,'greater')}>+</PrimaryButton>

                 </View>
            </View>
        </View>
    )
}
export default GameScreen;

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:24
    }
})