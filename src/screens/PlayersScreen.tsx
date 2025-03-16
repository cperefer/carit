import { buttonStyles, globalStyles } from '@/theme/globalStyles';
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { usePlayers } from '@/hooks/usePlayers';
import { PlayerGame } from '@/common/Types';
import { PlayerComponent } from '@/components';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ROUTES } from '@/constants';

export const PlayerScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const players = usePlayers();

  return (
    <View style={[globalStyles.full, globalStyles.flex, globalStyles.center, styles.screenContainer]}>
      <View style={[globalStyles.flex, styles.playersContainer]}>
        <View style={[globalStyles.flex, styles.playerSelectionContainer]}>
          <Text style={{ textAlign: "center", paddingBottom: 2 }}>Selecciona un jugador</Text>
          <View style={[globalStyles.full, globalStyles.flex, styles.playerContainer]}>
            {
              players.length ? 
                players.map(
                  (player: PlayerGame, index) =>
                    <PlayerComponent key={index} id={player.id} username={player.username} avatar={player.avatar} />
                ) :
                <Text>Cree un jugador para empezar</Text>
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
      <View style={[globalStyles.flex, globalStyles.center, styles.startGameContainer]}>
        <Pressable
          onPress={() => navigation.navigate(ROUTES.START_GAME)}
          style={[buttonStyles.generic, { width: "50%", height: "85%" }]}
        >
          <Text>Iniciar juego</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: "red"
  },
  playersContainer: {
    width: "80%",
    height: "50%",
    backgroundColor: "cyan",
    padding: 10,
    alignItems: "center"
  },
  playerSelectionContainer: {
    width: "100%",
    height: "80%",
    backgroundColor: "cyan",
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
    width: "60%",
    height: "18%",
    backgroundColor: "lightgreen",
  },
  startGameContainer: {
    width: "80%",
    height: "10%",
    backgroundColor: "lightblue",
  }
});
