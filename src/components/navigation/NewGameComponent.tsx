import { buttonStyles } from '@/theme/globalStyles'
import React from 'react'
import { Pressable, Text } from 'react-native'


export const NewGameComponent = () => {
    const handleNewGame = () => {
        console.log("Nueva Partida")
    }

    return (
        <Pressable style={buttonStyles.welcome} onPress={handleNewGame}>
            <Text>Nueva partida</Text>
        </Pressable>
    )
}
