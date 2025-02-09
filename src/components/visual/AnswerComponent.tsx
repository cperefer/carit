import React from 'react'
import { StyleSheet, View } from 'react-native'
import { AnswersContainerComponent } from '@components/visual'
import { CountdownComponent } from '@components/game'
import { globalStyles } from '@/theme/globalStyles'

export const AnswerComponent = () => {
  return (
    <View>
      <View style={[globalStyles.fullWidth, styles.countdown]}>
        <CountdownComponent />
      </View>
      <View style={[globalStyles.fullWidth, globalStyles.flex, globalStyles.center, styles.answers]}>
        <AnswersContainerComponent />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  countdown: {
    height: "10%",
    backgroundColor: "purple",
    padding: 10,
  },
  answers: {
    height: "90%",
    backgroundColor: "yellow",
  }
});