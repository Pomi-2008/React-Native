import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,Button, TextInput } from 'react-native';

export default function App() {
  const[enteredText, setEnteredText] = useState('');
  const[coursegoals, setCoursegoals] = useState([]);

function goalHandler(enteredgoalText) {
    setEnteredText(enteredgoalText);
}

function addGoalHandler() {
    setCoursegoals(
      (currentcousrsegoals)=>[...currentcousrsegoals,enteredText]
    );

}

  return (
    <View style={styles.appContainer}> 
    <View style={styles.inputContainer}>
      <TextInput style={styles.textInput} placeholder='enter your goals!' onChangeText={goalHandler}/>
      <Button title='add goal' onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of goals..</Text>
        {coursegoals.map ((goals)=><Text key={goals}>{goals}</Text>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    flex:1,
    padding:50,
    paddingHorizontal:16
  },
  inputContainer:{
    flex:1,  
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:"center",
    paddingBottom:24,
    borderBottomWidth:1,
    borderBottomColor:"#e4ebeeff"
  },
  textInput:{
    borderWidth:1,
    color:'#cccccc',
    width:'80%' ,
    marginRight:8,
    padding:8
  },
  goalsContainer:{
    flex:3,
  }

});
