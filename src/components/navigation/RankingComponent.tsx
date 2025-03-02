import { buttonStyles } from '@/theme/globalStyles'
import React from 'react'
import { Pressable, Text } from 'react-native'


export const RankingComponent = () => {
    const handleRanking = () => {
        console.log("Ranking")
    }

    return (
        <Pressable style={buttonStyles.welcome} onPress={handleRanking}>
            <Text>Ranking</Text>
        </Pressable>
    )
}
