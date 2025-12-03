import{FlatList,StyleSheet} from 'react-native';
import { CATEGORIES } from "../data/dummy-data";    
import CategoryGridTile from '../component/CategoryGridTile';

function renderCategoryItem(itemData){
    return <CategoryGridTile title={itemData.item.title} color={itemData.item.color}/>
}

function CategoryScreen(){
    return <FlatList 
    data={CATEGORIES} 
    keyExtractor={(item)=>item.id}
     renderItem={renderCategoryItem}
     numColumns={2}/>
}

export default CategoryScreen;

const styles = StyleSheet.create({
    
});