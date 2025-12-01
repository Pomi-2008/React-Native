import { Children } from "react";
import { Text,View,StyleSheet,Pressable } from "react-native";
import Colors from "../Screens/constants/colors";
function PrimaryButton({children,onPress}) {
   return (
    <View style={styles.buttonOuterContainer}>
    <Pressable 
     onPress={onPress} 
    android_ripple={{color:"#640233"}}
    style={({ pressed })=> pressed? [styles.buttonInnercontainer, styles.pressed]: styles.buttonInnercontainer}>
      <Text style={styles.buttontext}>{children}</Text>
    </Pressable>
       </View>
  );
}
export default PrimaryButton;
const styles = StyleSheet.create ({
    buttonOuterContainer:{
        borderRadius:28,
        margin:4,
        overflow:"hidden"

    },
    buttonInnercontainer:{
        backgroundColor: Colors.primary500,
        paddingVertical:8,
        paddingHorizontal:16,
        elevation:2
    },
    buttontext:{
        color:"white",
        textAlign:"center"
    },
    pressed:{
        opacity:0.75
    }
  
})