import { ROUTES } from '@/constants'
import { useChangeTurn } from '@/hooks/useChangeTurn'
import { useUpdateScore } from '@/hooks/useUpdateScore'
import { useGameStore } from '@/store/gameStore'
import { buttonStyles, globalStyles } from '@/theme/globalStyles'
import { Text } from '@react-navigation/elements'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React, { useEffect } from 'react'
import { Pressable, StyleSheet, View } from 'react-native'

export const AnswerResultScreen = (props: any) => {
    const turn = useGameStore(state => state.turn);
    const players = useGameStore(state => state.players);
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    const { correctAnswer } = props.route.params;

    const changeTurn = useChangeTurn();
    const updateScore = useUpdateScore(correctAnswer);

    useEffect(() => {
        // changeTurn();
        updateScore();
    }, []);

    const handleContinue = () => {
        if (Number(turn) < players.length - 1) {
            changeTurn();
            navigation.navigate(ROUTES.NEXT_PLAYER);
        } else {
            navigation.navigate(ROUTES.ROUND_RESULTS);
        }
    }

    return (
        <View style={[globalStyles.full, globalStyles.flex, globalStyles.center, styles.resultContainer]}>
            <View style={[globalStyles.flex, globalStyles.center, globalStyles.mainContainer]}>
                <Text>
                    {correctAnswer ? 'Correcto!' : 'Eeeeeerror! 🤭'}
                </Text>
                <Pressable style={buttonStyles.welcome} onPress={handleContinue}>
                    <Text>Continuar</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    resultContainer: {
        backgroundColor: "red"
    },
});
