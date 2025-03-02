import { buttonStyles } from '@/theme/globalStyles'
import React from 'react'
import { Pressable, Text } from 'react-native'


export const SettingsComponent = () => {
    const handleSettings = () => {
        console.log("Ajustes")
    }

    return (
        <Pressable style={buttonStyles.welcome} onPress={handleSettings}>
            <Text>Ajustes</Text>
        </Pressable>
    )
}
