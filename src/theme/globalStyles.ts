import { StyleSheet } from "react-native";


export const globalStyles = StyleSheet.create({
    center: {
        alignItems: "center",
        justifyContent: "center",
    },
    full: {
        height: "100%",
        width: "100%",
    },
    fullHeight: {
        height: "100%",
    },
    fullWidth: {
        width: "100%",
    },
    flex: {
        display: "flex",
    },
});

export const buttonStyles = StyleSheet.create({
    welcome: {
        ...globalStyles.flex,
        ...globalStyles.center,
        width: "50%",
        height: "18%",
        backgroundColor: "pink",
    }
})