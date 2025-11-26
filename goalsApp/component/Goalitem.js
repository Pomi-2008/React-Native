import {StyleSheet, Text, View,Button, TextInput,ScrollView, FlatList,Pressable} from 'react-native'
import { Modal } from 'react-native-web';
function Goalitem(props) {
    return (
      <View style={styles.goalItem}>
      <Pressable android_ripple={{color:"#cccccc"}} onPress={props.onDeleteItem.bind(this, props.id)}>
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
      </View>
      
    )
}

export default Goalitem

const styles = StyleSheet.create ({
     goalItem:{
    margin: 8,
    padding:8,
    borderRadius:6,//rounded corner
    backgroundColor:"#5e0acc"
  },
  goalText:{
    color:"#cccccc"
  }
});