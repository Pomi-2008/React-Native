import { View,Pressable,Text,StyleSheet,Platform } from "react-native";

function CategoryGridTile({title,color, onPress}){
    return <View style={styles.gridItem}>
        <Pressable android_ripple={{color:'#ccc'}} style={({ pressed })=>[
            styles.button,
            pressed ? styles.buttonPreesed: null,
        ]}
        onPress={onPress}
        >
            <View style={[styles.innerContainer, {backgroundColor:color}]}>
                <Text style={styles.titile}>{title}</Text>
            </View>
        </Pressable>
    </View>
}

export default CategoryGridTile;

const styles = StyleSheet.create({
    gridItem:{
        flex:1,
        margin:30,
        height:150,
        borderRadius:8,
        elevation:4,
        backgroundColor:'white',
        shadowColor:'black',
        shadowOpacity:0.25,
        shadowOffset:{width:0, height:2},
        shadowRadius:8,
        overflow:Platform.OS === "android" ? 'hidden': 'visible'
    },
    buttonPreesed:{
        opacity:0.5
    },
    button:{
        flex:1
    },
    innerContainer:{
        flex:1,
        padding:16,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:8
    },
    titile:{
        fontWeight:'bold',
        fontSize:18
    }
});