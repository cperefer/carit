import { globalStyles } from '@/theme/globalStyles'
import React from 'react'
import { Text, View } from 'react-native'

export const CountdownComponent = () => {
    return (
        <View style={[globalStyles.flex, globalStyles.center]}>
            <Text>Countdown</Text>
        </View>
    )
}
