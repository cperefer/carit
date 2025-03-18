import { ROUTES } from '@/constants'
import { useAllQuestions } from '@/hooks/useAllQuestions'
import { useRemoveBackHandler } from '@/hooks/useRemoveBackHandler'
import { useGameStore } from '@/store/gameStore'
import { globalStyles } from '@/theme/globalStyles'
import { Text } from '@react-navigation/elements'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'

export const StartGameScreen = () => {
    const questions = useGameStore(state => state.questions);
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    useRemoveBackHandler();
    useAllQuestions();

    useEffect(() => {
        if (questions && questions.length) {
            navigation.navigate(ROUTES.NEXT_PLAYER);
        }
    }, [questions, navigation]);

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
