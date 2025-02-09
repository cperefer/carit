import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { globalStyles } from '../../theme/globalStyles';

interface Props {
  question?: String
}

const dummyQuestion:String = "En 'Harry Potter y La Cámara Secreta', ¿qué modelo de coche es con el que Ron y Harry llegan a Hogwarts?";

export const QuestionComponent = ({question = dummyQuestion}:Props) => {
  return (
    <View 
      style={[globalStyles.full, globalStyles.center, globalStyles.flex]}
    >
      <View style={[styles.questionContainer, globalStyles.center, globalStyles.flex]}>
        <Text>{question}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  questionContainer: {
    width: "80%",
    height: "40%",
    backgroundColor: "blue",
    padding: 10,
  }
});
