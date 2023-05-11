import { StyleSheet } from 'react-native';
import { theme } from '../../constants';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginHorizontal: 20,
      marginTop: 50
    },
    title:{
      textAlign: 'center',
      fontWeight: 'bold',
      backgroundColor: theme.colors.secondary,
      paddingVertical:20
    },
  });