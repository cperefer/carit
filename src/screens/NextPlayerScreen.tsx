import { ROUTES } from '@/constants';
import { useRandomQuestion } from '@/hooks/useRandomQuestion';
import { buttonStyles, globalStyles } from '@/theme/globalStyles';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native';

export const NextPlayerScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    useRandomQuestion();
    const handleContinue = () => {
        navigation.navigate(ROUTES.QUESTION);
    }

    return (
        <View style={[globalStyles.full, globalStyles.flex, globalStyles.center, styles.welcomeContainer]}>
            <View style={[globalStyles.flex, globalStyles.center, globalStyles.mainContainer]}>
                <Text>Jugador, es tu turno!</Text>
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
