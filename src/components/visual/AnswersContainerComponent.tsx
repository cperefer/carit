import { globalStyles } from '@/theme/globalStyles';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AnswerOptionComponent } from '@components/game';

export const AnswersContainerComponent = () => {
  return (
    <View style={[globalStyles.flex, globalStyles.center, globalStyles.full, styles.style]}>
      <View style={[globalStyles.full, globalStyles.flex, globalStyles.center, styles.gridContainer]}>
          <AnswerOptionComponent answerOption="Respuesta 1"/>
          <AnswerOptionComponent answerOption="Respuesta 2"/>
          <AnswerOptionComponent answerOption="Respuesta 3"/>
          <AnswerOptionComponent answerOption="Respuesta 4"/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  style: {
    backgroundColor: "cyan"
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 18,
    padding: 16,
    width: "100%",
    backgroundColor: "orange"
  },
});