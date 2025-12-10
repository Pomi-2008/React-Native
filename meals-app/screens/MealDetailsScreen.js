import { Text, View,Image,StyleSheet,ScrollView  } from 'react-native'
import { MEALS } from '../data/dummy-data';
import MealDetails from '../component/MealDetails';
import Subtitle from '../component/MealsDetails/Subtitle';
import List from '../component/MealsDetails/List';

function MealDetailsScreen({route}){
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal)=>meal.id === mealId);
    return (
        <ScrollView>
            <Image style={styles.image} source={{uri: selectedMeal.imageUrl}}/>
            <Text style={styles.title}>{selectedMeal.title}</Text>

        <MealDetails
         duration={selectedMeal.duration}
          affordability={selectedMeal.affordability} 
          complexity={selectedMeal.complexity}
          textStyle={styles.detailText}/>
           <View style={styles.listoutercontainer}>
            <View style={styles.listContainer}>
            <Subtitle>ingredient</Subtitle>
               <List data={selectedMeal.ingredients}/>
                 <Subtitle>steps</Subtitle>
                 <List data={selectedMeal.steps}/>
           </View>
           </View>
        </ScrollView>
    )
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:350
    },
    title:{
        fontWeight: 'bold',
        fontSize:24,
        margin:8,
        textAlign:'center',
        color:'white'
    },
    detailText:{
        color:'white'
    },
    listContainer:{
        width:'80%'
    },
    listoutercontainer:{
        alignItems:'center'
    }
})