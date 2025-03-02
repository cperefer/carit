import { globalStyles } from '@/theme/globalStyles';
import React, { useEffect, useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { usePlayers } from '@/hooks/usePlayers';
import { PlayerDB } from '@/common/Types';
import { PlayerComponent } from '@/components';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ROUTES } from '@/constants';

export const PlayerScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const players = usePlayers();
  const [isCreatePlayerShown, setIsCreatePlayerShown] = useState(false);

  useEffect(() => { }, [isCreatePlayerShown])
  return (
    <View style={[globalStyles.full, globalStyles.flex, globalStyles.center, styles.screenContainer]}>
      <View style={[globalStyles.flex, styles.mainContainer]}>
        <View style={[globalStyles.flex, styles.playerSelectionContainer]}>
          <Text style={{ textAlign: "center", paddingBottom: 2 }}>Selecciona un jugador</Text>
          <View style={[globalStyles.full, globalStyles.flex, styles.playerContainer]}>
            {
              players.map(
                (player: PlayerDB, index) =>
                  <PlayerComponent key={index} username={player.username} avatar={player.avatar} />
              )
            }
          </View>
        </View>
        <View style={[globalStyles.flex, globalStyles.center, styles.createPlayerContainer]}>
          <Pressable
            onPress={() => navigation.navigate(ROUTES.CREATE_PLAYER)}
          >
            <Text>Crear jugador</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: "red"
  },
  mainContainer: {
    width: "90%",
    height: "60%",
    backgroundColor: "cyan",
    padding: 10,
    alignItems: "center"
  },
  playerSelectionContainer: {
    width: "100%",
    height: "80%",
    backgroundColor: "lightblue",
    padding: 10
  },
  playerContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 5,
    padding: 5,
  },
  createPlayerContainer: {
    width: "100%",
    height: "18%",
    backgroundColor: "lightgreen",
  }
});
