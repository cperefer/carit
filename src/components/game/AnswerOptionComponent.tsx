import { AnswerOption } from '@/common/Types'
import { globalStyles } from '@/theme/globalStyles'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const AnswerOptionComponent = ({answerOption, isCorrect}:AnswerOption) => {
  return (
    <View style={[globalStyles.flex, globalStyles.center, styles.answerOption]}>
      <Text>{answerOption}</Text>
    </View>
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
