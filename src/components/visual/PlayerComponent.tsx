import { PlayerDB, PlayerGame } from '@/common/Types'
import { useGameStore } from '@/store/gameStore'
import React, { useEffect, useState } from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

export const PlayerComponent = ({id, username, avatar}:PlayerDB) => {
  if (id === undefined) {
    console.error("Player id is undefined");
    return null;
  }

  const players = useGameStore(state => state.players);
  const setPlayers = useGameStore(state => state.setPlayers);
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => setPlayers([]), [])
  
  const isUserInArray = (username: String, players: PlayerGame[]) => (players.some(player => player.username === username));

  const handlePress = () => {
    if (!isUserInArray(username, players)) {
      players.push({id, username, avatar});

      setPlayers(players);
    } else {
      const newPlayers = players.filter(player => player.username !== username);

      setPlayers(newPlayers)
    }

    setIsSelected(!isSelected);
  }

  const handleLongPress = () => {
    console.log("handleLongPress")

    // TODO: disparar un prompt para editar/eliminar el jugador
  }

  return (
    <Pressable 
      style={{...styles.playerContainer, backgroundColor: isSelected ? "red" : "pink"}}
      onPress = {() => handlePress()}
      onLongPress = {() => handleLongPress()}
    >
        <Text>{avatar}</Text>
        <Text style={{textAlign: "center"}}>{username}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    playerContainer: {
        width: "24%",
        height: "15%",
        alignItems: "center",
        padding: 10,
        backgroundColor: "pink"
    }
});
