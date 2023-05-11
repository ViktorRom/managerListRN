import React from "react";
import { View, Text } from "react-native";
import {styles} from './styles';


const Header = ({title}) =>{

return(
    <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.instructions}>Instructions: Add items to your list to start and organize yourself.</Text>
    </View>
)
}
export default Header;