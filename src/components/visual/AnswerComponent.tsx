import React from 'react'
import { Text, View } from 'react-native'
import { AnswerContainerComponent } from '@components/visual'
import { CountdownComponent } from '@components/game'

export const AnswerComponent = () => {
  return (
    <View>
      <CountdownComponent />
      <AnswerContainerComponent />
    </View>
  )
}
