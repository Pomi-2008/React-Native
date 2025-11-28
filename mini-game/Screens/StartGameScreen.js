import { TextInput,View,StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
function StartGameScreen() {
    return (
        <View  style={styles.inputcontainer}>
            <TextInput 
            style={styles.numbetInput}
            keyboardType="number-pad"
            maxLength={2}/>
           <PrimaryButton>Reset</PrimaryButton> 
           <PrimaryButton>confirm</PrimaryButton>
        </View>
    )
};

export default StartGameScreen

const styles = StyleSheet.create({
      inputcontainer:{
        marginTop:100,
        padding:16 ,
        backgroundColor:"#72063c",  
        marginHorizontal:24,
        borderRadius:8,
        elevation:4,
        shadowColor:"black",
        shadowOffset:{width:0,height:2},
        shadowRadius:6,
        shadowOpacity:0.25
    },
    numbetInput:{
        height:60,
        width:50,
        fontSize:32,
        borderBottomColor:"#ddb52f",
        borderBottomWidth:2,
        color:"#ddb52f",
        marginVertical:8,
        fontWeight:'bold',
        textAlign:"center"
    }
})