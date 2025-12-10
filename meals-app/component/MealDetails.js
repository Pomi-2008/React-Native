import { View, Text,StyleSheet } from 'react-native';

function MealDetails({duration,complexity,affordability }){
        <View style={styles.details}>
            <Text style={styles.detailsItem}>{duration}m</Text>
            <Text style={styles.detailsItem}>{complexity}</Text>
            <Text style={styles.detailsItem}>{affordability}</Text>
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