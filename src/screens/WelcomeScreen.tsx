import { ContinueGameComponent, NewGameComponent, RankingComponent, SettingsComponent } from '@components/navigation';
import { globalStyles } from '@/theme/globalStyles';
import React from 'react'
import { StyleSheet, View } from 'react-native'

export const WelcomeScreen = () => {

  return (
    <View style={[globalStyles.full, globalStyles.flex, globalStyles.center, styles.welcomeContainer]}>
        <View style={[globalStyles.flex, globalStyles.center, styles.buttonsContainer]}>
          <NewGameComponent />
          <ContinueGameComponent />
          <RankingComponent />
          <SettingsComponent />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  welcomeContainer: {
      backgroundColor: "red"
  },
  buttonsContainer: {
    width: "90%",
    height: "60%",
    backgroundColor: "cyan",
    justifyContent: "space-around",
    padding: 10
  },
  button: {
    width: "50%",
    height: "18%",
    backgroundColor: "pink",
  }
});
