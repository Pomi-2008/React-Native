import { View, FlatList, StyleSheet,Pressable } from 'react-native';
import { MEALS,CATEGORIES } from "../data/dummy-data";
import MealItem from '../component/MealItem';
import { useLayoutEffect } from 'react';
function MealsOverviewScreen({ route,navigation }) {
    const catID = route.params.CategoryID;

    const displayMeals= MEALS.filter((mealItem)=>{
        return mealItem.categoryIds.indexOf(catID)>=0;
    });
    useLayoutEffect(()=>{
    const categoryTitle = CATEGORIES.find((category)=> category.id === catID).title;
        navigation.setOptions({
        title: categoryTitle,
    })

    },[catID,navigation]);
    
    
    function renderItem(itemData){
        const item = itemData.item;

        const mealItemProps = {
            id:item.id,
            title: item.title,
            complexity: item.complexity,
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