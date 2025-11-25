import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}> 
    <View style={styles.inputContainer}>
      <TextInput style={styles.textInput} placeholder='enter your goals!'/>
      <Button title='add goal'/>
      </View>
      <View>
        <Text>List of goals..</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
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
  }

});
