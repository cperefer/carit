import React from 'react'
import { StyleSheet, useWindowDimensions, View } from 'react-native'
import { AnswerComponent, QuestionComponent } from '../components';
import { useRemoveBackHandler } from '@/hooks/useRemoveBackHandler';


export const QuestionScreen = () => {
  const {width, height} = useWindowDimensions();

  useRemoveBackHandler();

  const styles = StyleSheet.create({
    containerQuestion: {
        width,
        height: height * 0.6,
        backgroundColor: "red"
    },
    containerAnswers: {
        width,
        height: height * 0.4,
        backgroundColor: "green"
    }
  });

  return (
    <View>
        <View style={styles.containerQuestion}>
          <QuestionComponent />
        </View>
        <View style={styles.containerAnswers}>
          <AnswerComponent />
        </View>
    </View>
  )
}
