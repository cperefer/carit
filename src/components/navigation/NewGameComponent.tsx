import { ROUTES } from '@/constants';
import { buttonStyles } from '@/theme/globalStyles'
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react'
import { Pressable, Text } from 'react-native'


export const NewGameComponent = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    
    const handleNewGame = () => {
        console.log("Nueva Partida")
        navigation.navigate(ROUTES.QUESTION)
    }

    return (
        <Pressable style={buttonStyles.welcome} onPress={handleNewGame}>
            <Text>Nueva partida</Text>
        </Pressable>
    )
}
