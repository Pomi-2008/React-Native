import { View, Text,StyleSheet } from 'react-native';

function MealDetails({duration,complexity,affordability,styles, textStyle }){
        <View style={[styles.details,styles]}>
            <Text style={[styles.detailsItem,textStyle]}>{duration}m</Text>
            <Text style={[styles.detailsItem,textStyle]}>{complexity}</Text>
            <Text style={[styles.detailsItem,textStyle]}>{affordability}</Text>
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