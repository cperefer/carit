import { globalStyles } from '@/theme/globalStyles';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AnswerOptionComponent } from '@components/game';
import { AnswerOption } from '@/common/Types';

export const AnswersContainerComponent = (
    {answers = [
      {answerOption: "Respuesta 1", isCorrect: false}, 
      {answerOption: "Respuesta 2", isCorrect: false}, 
      {answerOption: "Respuesta 3", isCorrect: false}, 
      {answerOption: "Respuesta 4", isCorrect: true}
    ]}
  ) => {

  return (
    <View style={[globalStyles.flex, globalStyles.center, globalStyles.full, styles.style]}>
      <View style={[globalStyles.full, globalStyles.flex, globalStyles.center, styles.gridContainer]}>
          {
            answers.map((answerOutput:AnswerOption, index) => (
              <AnswerOptionComponent key={index} answerOption={answerOutput.answerOption} isCorrect={answerOutput.isCorrect} />
            ))
          }

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