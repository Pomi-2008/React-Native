import { Text,View, StyleSheet } from 'react-native';
function GameScreen(){
    return(
        <View style={styles.screen}>
            <Text style={styles.title}>option's guess</Text>
            {/* guess */}
            <View>
                 <Text>Higher or lower?</Text>
                 {/* + - */}
                 {/* <View>Log rounds</View> */}
            </View>
        </View>
    )
}
export default GameScreen;

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:24
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        color:'#5f0331ff',
        textAlign:"center",
        borderWidth:2,
        borderColor:"#5f0331ff",
        padding:12
    }
})