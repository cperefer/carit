import React from 'react'
import { View } from 'react-native'
import { AnswersContainerComponent } from '@components/visual'
import { CountdownComponent } from '@components/game'

export const AnswerComponent = () => {
  return (
    <View>
      <CountdownComponent />
      <AnswersContainerComponent />
    </View>
  )
}
