import { useCreatePlayer } from '@/hooks/useCreatePlayer';
import { buttonStyles, globalStyles } from '@/theme/globalStyles';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

export const CreatePlayerComponent = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    const [avatar, setAvatar] = useState("");
    const [username, setUsername] = useState("");

    const createPlayer = useCreatePlayer();

    const onChangeText = (text: string) => {
        setUsername(text)
    }

    const handleSubmit = () => {
        createPlayer({ username, avatar });
        navigation.goBack();
    }

    return (
        <View style={[globalStyles.full, globalStyles.flex, globalStyles.center, styles.container]}>
            <View style={styles.mainContainer}>
                <View style={[globalStyles.flex, globalStyles.center, styles.avatarContainer]}>
                    <Text>Avatar</Text>
                    <Text style={{ fontStyle: "italic" }}>Aquí se podrá elegir el avatar 🐿️</Text>
                </View>
                <View style={[globalStyles.flex, globalStyles.center, globalStyles.fullWidth, styles.avatarContainer]}>
                    <Text>Nombre: </Text>
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 5, width: "80%" }}
                        onChangeText={onChangeText}
                        value={username}
                    />
                </View>
                <Pressable 
                    style={[buttonStyles.generic]}
                    onPress={handleSubmit}
                >
                    <Text>Crear jugador</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "red"
    },
    mainContainer: {
        width: "90%",
        height: "60%",
        backgroundColor: "cyan",
        padding: 10,
        alignItems: "center"
    },
    avatarContainer: {
        paddingBottom: 10,
    },
    usernameContainer: {
        paddingBottom: 10,
    }
});
