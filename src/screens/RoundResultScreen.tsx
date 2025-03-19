import { ROUTES } from '@/constants'
import { useGameStore } from '@/store/gameStore'
import { buttonStyles, globalStyles } from '@/theme/globalStyles'
import { Text } from '@react-navigation/elements'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React, { useEffect } from 'react'
import { Pressable, StyleSheet, View } from 'react-native'

export const RoundResultScreen = () => {
    const round = useGameStore(state => state.round);
    const score = useGameStore(state => state.score);
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    const handleNextRound = () => {
        navigation.navigate(ROUTES.NEXT_PLAYER);
    }

    return (
        <View style={[globalStyles.full, globalStyles.flex, globalStyles.center, styles.welcomeContainer]}>
            <View style={[globalStyles.flex, globalStyles.center, globalStyles.mainContainer]}>
                <Text>Fin de la ronda {round.toString()}!</Text>
                {
                    score.length && score.map((player) => 
                        <Text>{player.username}: {player.points.toString()}</Text>
                    ) 
                }
                <Pressable style={buttonStyles.welcome} onPress={handleNextRound}>
                    <Text>Siguiente ronda</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  welcomeContainer: {
      backgroundColor: "red"
  },
});
