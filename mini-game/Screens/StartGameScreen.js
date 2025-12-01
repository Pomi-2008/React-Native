import { TextInput,View,StyleSheet,Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
function StartGameScreen({onPickNumber}) {
    const[enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText){
        setEnteredNumber(enteredText);
    }; 
    function resetInputHandler(){
        setEnteredNumber('');
    };

    function confirmInputNumber(){
        const choosenNumber = parseInt(enteredNumber)

        if(isNaN(choosenNumber) || choosenNumber<0 || choosenNumber>99){
            Alert.alert(
                'Invalid Number!',
            'Number has to be the number between 1 to 99',
            [{text:'Okay', style:'destructibe', onPress: resetInputHandler}]
            );
            return;
        }
       onPickNumber(choosenNumber);
    };
    return (
        <View  style={styles.inputcontainer}>
            <TextInput 
            style={styles.numbetInput}
            keyboardType="number-pad"
            maxLength={2}
            autoCapitalize="none"
            autoCorrect={false}
            value={enteredNumber}
            onChangeText ={numberInputHandler}/>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonsContainer}>
                 <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton> 
                 </View>
                 <View style={styles.buttonsContainer}>
                <PrimaryButton onPress={confirmInputNumber}>confirm</PrimaryButton>
                </View>
            </View>
        </View>
    )
};

export default StartGameScreen

const styles = StyleSheet.create({
      inputcontainer:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:100,
        padding:16 ,
        backgroundColor:"#5f0331ff",  
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
    },
    buttonsContainer:{
        flexDirection:"row"
    }
})