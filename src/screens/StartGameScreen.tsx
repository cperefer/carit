import { ROUTES } from '@/constants'
import { useAllQuestions } from '@/hooks/useAllQuestions'
import { useRandomQuestion } from '@/hooks/useRandomQuestion'
import { useGameStore } from '@/store/gameStore'
import { globalStyles } from '@/theme/globalStyles'
import { Text } from '@react-navigation/elements'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React from 'react'
import { StyleSheet, View } from 'react-native'

export const StartGameScreen = () => {
    const actualQuestion = useGameStore(state => state.actualQuestion);
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    useAllQuestions();
    console.log("mimimi")
    useRandomQuestion();

    if (actualQuestion && actualQuestion.title) {
        navigation.navigate(ROUTES.QUESTION);
    }

    return (
        <View style={[globalStyles.full, globalStyles.flex, globalStyles.center, styles.welcomeContainer]}>
            <View style={[globalStyles.flex, globalStyles.center, globalStyles.mainContainer]}>
                <Text>Preparando la partida</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  welcomeContainer: {
      backgroundColor: "red"
  },
});
