import { View, FlatList, StyleSheet,Pressable } from 'react-native';
import { MEALS } from "../data/dummy-data";
import MealItem from '../component/MealItem';
function MealsOverviewScreen({ route }) {
    const catID = route.params.CategoryID;

    const displayMeals= MEALS.filter((mealItem)=>{
        return mealItem.categoryIds.indexOf(catID)>=0;
    });

    function renderItem(itemData){
        const item = itemData.item;

        const mealItemProps = {
            title: item.title,
            imageUrl:item.imageUrl,
            affordability:item.affordability,
            duration:item.duration
        }
        return <MealItem {...mealItemProps}/>
    }


    return(
    <View style={styles.container}>
        <FlatList 
        data={displayMeals} 
        keyExtractor={(item)=>item.id} 
        renderItem={renderItem}/>
    </View>
    )
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:16,
    }
})