import { StyleSheet } from "react-native";
import { theme } from "../../constants";

export const styles = StyleSheet.create({
    container:{
        marginTop: 50
    },
      title:{
        fontFamily: 'Kanit-Bold',
        fontSize: 25,
        backgroundColor: theme.colors.primary,
        color: theme.colors.white,
        textAlign: 'center',
        paddingVertical: 30
    },
    instructions:{
      fontFamily: 'Kanit-Medium',
      marginVertical:15,
      marginLeft: 5
  },
    });