import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { 
  StyleSheet, 
  Text, View,Button, TextInput,ScrollView, FlatList } from 'react-native';
import Goalitem from './component/Goalitem';
import Goalinput from './component/Goalinput';

export default function App() {
  const[coursegoals, setCoursegoals] = useState([]);
  const[modalIsVisible, setModalisVisible] = useState(false);

  function startAddgoalHandler(){
    setModalisVisible(true);
  }
  function EndgoalHandler(){
    setModalisVisible(false);
    console.log("cancel");
  }


function addGoalHandler(enteredText) {
    setCoursegoals(
      (currentcousrsegoals)=>[...currentcousrsegoals,
        {  text:enteredText,id: Date.now().toString()  }
      ]);
      EndgoalHandler();
}

function DeleteGaolHandler(id){
  setCoursegoals((currentcousrsegoals)=>{
    return currentcousrsegoals.filter((goal)=>goal.id !== id);
  })
}

  return (
    <View style={styles.appContainer}> 
    <Button title='add new goal..' color="#5e0acc" onPress={startAddgoalHandler}/>
      {modalIsVisible && <Goalinput visible={modalIsVisible}  onAddgoal={addGoalHandler} onCancel={EndgoalHandler}/>}
      <View style={styles.goalsContainer}>
      <FlatList data={coursegoals} renderItem={(itemData)=>{
        return(
        <Goalitem 
        text={itemData.item.text} 
        id={itemData.item.id} 
        onDeleteItem={DeleteGaolHandler}/>
        )
      }}
      keyExtractor={(item,index)=>{
        return item.id;
      }}
      alwaysBounceHorizontal={false}/>
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
  goalsContainer:{
    flex:5,
  }
 

});
