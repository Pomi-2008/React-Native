import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View> 
      <TextInput placeholder='enter your goals!'/>
      <Button title='add goal'/>
      <View>
        <Text>List of goals..</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
});
