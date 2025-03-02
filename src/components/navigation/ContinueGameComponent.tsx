import { buttonStyles } from '@/theme/globalStyles'
import React from 'react'
import { Pressable, Text } from 'react-native'


export const ContinueGameComponent = () => {
    const handleContinueGame = () => {
        console.log("Continuar Partida")
    }

    return (
        <Pressable style={buttonStyles.welcome} onPress={handleContinueGame}>
            <Text>Continuar partida</Text>
        </Pressable>
    )
}
