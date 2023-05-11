import React, { useState } from "react";
import { View,Text, ActivityIndicator, Button } from "react-native";
import {useFonts} from 'expo-font';
import { ToBuy, ToDo, Home } from "./screens";
import {styles} from './styles'
import { theme } from './constants';
import { Header } from "./components";

export default function App(){
const [toDo,setToDo] = useState(false);
const [toBuy,setToBuy] = useState(false);


const [loaded] = useFonts ({

    'Kanit-ThinItalic' : require('../assets/fonts/Kanit/Kanit-ThinItalic.ttf'),
    'Kanit-Black.ttf' : require('../assets/fonts/Kanit/Kanit-Black.ttf'),
    'Kanit-BlackItalic': require('../assets/fonts/Kanit/Kanit-BlackItalic.ttf'),
    'Kanit-Bold': require('../assets/fonts/Kanit/Kanit-Bold.ttf'),
    'Kanit-BoldItalic' :require('../assets/fonts/Kanit/Kanit-BoldItalic.ttf'),
    'Kanit-ExtraBold': require('../assets/fonts/Kanit/Kanit-ExtraBold.ttf'),
    'Kanit-ExtraBoldItalic' : require('../assets/fonts/Kanit/Kanit-ExtraBoldItalic.ttf'),
    'Kanit-ExtraLight' : require('../assets/fonts/Kanit/Kanit-ExtraLight.ttf'),
    'Kanit-ExtraLightItalic'  : require('../assets/fonts/Kanit/Kanit-ExtraLightItalic.ttf'),
    'Kanit-Italic' : require('../assets/fonts/Kanit/Kanit-Italic.ttf'),
    'Kanit-LightItalic' :  require('../assets/fonts/Kanit/Kanit-LightItalic.ttf'),
    'Kanit-Medium' :  require('../assets/fonts/Kanit/Kanit-Medium.ttf'),
    'Kanit-MediumItalic' : require('../assets/fonts/Kanit/Kanit-MediumItalic.ttf'),
    'Kanit-Regular' : require('../assets/fonts/Kanit/Kanit-Regular.ttf'),
    'Kanit-SemiBold' : require('../assets/fonts/Kanit/Kanit-SemiBold.ttf'),
    'Kanit-SemiBoldItalic' : require('../assets/fonts/Kanit/Kanit-SemiBoldItalic.ttf'),
    'Kanit-Thin' : require('../assets/fonts/Kanit/Kanit-Thin.ttf'),

})

    if(!loaded){
        return (
            <View style ={styles.loadContainer}>
                <ActivityIndicator size='large' />
            </View>
        )
    }

     const headerTitle = toDo ? 'ToDoList' : 'Welcome';

    const Contents = () =>{
        if(toDo) return <ToDo/>
        if(toBuy) return <ToBuy/>

        return <Home/>
    }

    return(
    <View style={styles.container}>
        <Header title={headerTitle}></Header>
        <View style={styles.buttonsMenu}>
            <Button title="To Do" color={'#0C7F4E'} onPress={()=> {setToDo(true);}} />
            <Button title="To Buy" color={'#5F2B9E'} onPress={() => { setToBuy(true)}}/>
        </View>
        <Contents/>
    </View>
    )
} 