import { ROUTES } from '@/constants'
import { useChangeTurn } from '@/hooks/useChangeTurn'
import { buttonStyles, globalStyles } from '@/theme/globalStyles'
import { Text } from '@react-navigation/elements'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React, { useEffect } from 'react'
import { Pressable, StyleSheet, View } from 'react-native'

export const AnswerResultScreen = (props: any) => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    const { correctAnswer } = props.route.params;

    const changeTurn = useChangeTurn();

    useEffect(() => {
        changeTurn();
    }, []);

    const handleContinue = () => {
        console.log('continue')
        navigation.navigate(ROUTES.NEXT_PLAYER);
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
