import { ROUTES } from '@/constants';
import { useRandomQuestion } from '@/hooks/useRandomQuestion';
import { useGameStore } from '@/store/gameStore';
import { buttonStyles, globalStyles } from '@/theme/globalStyles';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native';

export const NextPlayerScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const players = useGameStore(state => state.players);
    const turn = useGameStore(state => state.turn);

    const {username} = players[Number(turn)]
    useRandomQuestion();
    const handleContinue = () => {
        navigation.navigate(ROUTES.QUESTION);
    }

    return (
        <View style={[globalStyles.full, globalStyles.flex, globalStyles.center, styles.welcomeContainer]}>
            <View style={[globalStyles.flex, globalStyles.center, globalStyles.mainContainer]}>
                <Text>{username}, es tu turno!</Text>
                <Pressable style={buttonStyles.welcome} onPress={handleContinue}>
                    <Text>Continuar</Text>
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
