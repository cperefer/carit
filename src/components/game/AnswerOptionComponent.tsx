import { AnswerOption } from '@/common/Types'
import { ROUTES } from '@/constants'
import { globalStyles } from '@/theme/globalStyles'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

export const AnswerOptionComponent = ({ answerOption, isCorrect }: AnswerOption) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const handlePress = () => {
    navigation.navigate(ROUTES.ANSWER_RESULT, {correctAnswer: isCorrect})
  }

  return (
    <Pressable
      style={[globalStyles.flex, globalStyles.center, styles.answerOption]}
      onPress={handlePress}
    >
      <View>
        <Text>{answerOption}</Text>
      </View>
    </Pressable>

  )
}

const styles = StyleSheet.create({
  answerOption: {
    width: "46%",
    height: "30%",
    padding: 20,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    borderRadius: 8,
    marginVertical: 15,
  }
})
