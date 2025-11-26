import { useState } from 'react';
import { 
  StyleSheet, 
  Text, View,Button, TextInput,ScrollView, FlatList,Modal } from 'react-native';

function Goalinput(props){
      const[enteredText, setEnteredText] = useState('');
    

    function goalHandler(enteredText) {
    setEnteredText(enteredText);
}

function addGoalHandler(){
    props.onAddgoal(enteredText);
    setEnteredText('');
}
    
    return (
        <Modal animationType='slide'>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} placeholder='enter your goals!' onChangeText={goalHandler} value={enteredText}/>
          <View style={styles.burronContainer}>
            <View style={styles.button}>
            <Button title='add goal'onPress={addGoalHandler}/>
            </View>
            <View style={styles.button}>
            <Button title='cancel' onPress={props.onCancel}/>
            </View>
          </View>
           </View>
          </Modal>
    )
};
export default Goalinput

const styles = StyleSheet.create({
    inputContainer:{
    flex:1,  
    padding:16,
    flexDirection:'column',
    justifyContent:'center',
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
  burronContainer:{
    marginTop:16,
    flexDirection:"row"
  },
  button:{
    width:"100%",
    marginHorizontal:8
  }
})