import { globalStyles } from '@/theme/globalStyles'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface Props {
    answerOption?: String
}

export const AnswerOptionComponent = ({answerOption}:Props) => {
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
