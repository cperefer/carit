import { useCreatePlayer } from '@/hooks/useCreatePlayer';
import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

export const CreatePlayerComponent = () => {
    const [avatar, setAvatar] = useState("");
    const [username, setUsername] = useState("");

    const createPlayer = useCreatePlayer();

    const onChangeText = (text:string) => {
        setUsername(text);
    }

    const handleSubmit = () => {
        createPlayer({username, avatar});
    }

    return (
        <View style={styles.container}>
            <Text>Avatar</Text>
            <Text>Nombre: </Text>
            <TextInput
                onChangeText={onChangeText}
                value={username}
            />
            <Pressable onPress={handleSubmit}>
                <Text>Crear jugador</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: "20%",
        left: "2.5%",
        zIndex: 999,
        width: "95%",
        height: "40%",
        backgroundColor: "cyan",
    }
});
