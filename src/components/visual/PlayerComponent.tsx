import { PlayerDB } from '@/common/Types'
import React, { useState } from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

export const PlayerComponent = ({username, avatar}:PlayerDB) => {
  const [isSelected, setIsSelected] = useState(false);

  const handlePress = () => {
    console.log("handlePress")

    setIsSelected(!isSelected);

    // TODO: METERLO EN EL ESTADO GLOBAL
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
