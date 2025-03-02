import { PlayerDB } from '@/common/Types'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const PlayerComponent = ({username, avatar}:PlayerDB) => {
  return (
    <View style={styles.playerContainer}>
        <Text>{avatar}</Text>
        <Text style={{textAlign: "center"}}>{username}</Text>
    </View>
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
