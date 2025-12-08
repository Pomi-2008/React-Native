import{FlatList,StyleSheet} from 'react-native';
import { CATEGORIES } from "../data/dummy-data";    
import CategoryGridTile from '../component/CategoryGridTile';


function CategoryScreen({navigation}){

    function renderCategoryItem(itemData){

    function onPressHandler(){
            navigation.navigate("MealsOverviewScreen");

    }

    return <CategoryGridTile 
    title={itemData.item.title} 
    color={itemData.item.color} 
    onPress={onPressHandler}
    navigation={navigation}
    />
}

    return <FlatList 
    data={CATEGORIES} 
    keyExtractor={(item)=>item.id}
     renderItem={renderCategoryItem}
     numColumns={2}/>
}

export default CategoryScreen;

const styles = StyleSheet.create({
    
});