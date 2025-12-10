import { View, Text,StyleSheet } from 'react-native';

function MealDetails({duration,complexity,affordability,styles, textStyle }){
        <View>
            <Text >{duration}m</Text>
            <Text >{complexity}</Text>
            <Text>{affordability}</Text>
        </View>
    }

export default MealDetails;

const styles = StyleSheet.create({
    details:{
        flexDirection:'row',
        alignItems:'center',
        padding:8, 
        justifyContent:'center'
    },
    detailsItem:{
       marginHorizontal:4,
       fontSize:12
    }
})