import { Text, View,Image  } from 'react-native'
import { MEALS } from '../data/dummy-data';

function MealDetailsScreen({route}){
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal)=>meal.id === mealId);
    return (
        <View>
            <Image source={{uri: selectedMeal.imageUrl}}/>
            <Text></Text>
            <View>
                <Text>Ingridient</Text>

                <Text>Steps</Text>
            </View>
        </View>
    )
}

export default MealDetailsScreen;