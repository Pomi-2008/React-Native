import { Text, View,Image,StyleSheet  } from 'react-native'
import { MEALS } from '../data/dummy-data';
import MealDetails from '../component/MealDetails';

function MealDetailsScreen({route}){
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal)=>meal.id === mealId);
    return (
        <View>
            <Image style={styles.image} source={{uri: selectedMeal.imageUrl}}/>
            <Text style={styles.title}>{selectedMeal.title}</Text>

        <MealDetails
         duration={selectedMeal.duration}
          affordability={selectedMeal.affordability} 
          complexity={selectedMeal.complexity}
          textStyle={styles.detailText}/>
            
                <Text style={styles.subtitle}>Ingridient</Text>
                {selectedMeal.ingredients.map((ingredient)=>(
                   <Text key={ingredient}>{ingredient}</Text> 
                ))}
                <Text style={styles.subtitle}>Steps</Text>
                {selectedMeal.steps.map((step)=>(
                   <Text key={step}>{step}</Text> 
                ))}
        </View>
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
    subtitle:{
        color:'white',
        fontSize:18,
        fontWeight:'bold',
        margin:6
    }
})