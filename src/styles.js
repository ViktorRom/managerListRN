import { StyleSheet } from "react-native";
import { theme } from "./constants";


export const styles = StyleSheet.create({
    loadContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    container:{
        flex:1,
    },
    buttonsMenu:{
        width: '60%',
        flexDirection:'row',
        justifyContent: 'space-between',
        marginHorizontal: 70, 
        marginTop: 30
 
    },
})