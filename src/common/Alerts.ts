import { Alert } from "react-native";

const lessThanTwoPlayersAlert = () => {
    Alert.alert(
        'No hay jugadores seleccionados',
        'Por favor, selecciona dos o más jugadores', 
        [
        {text: 'OK'},
        ]
    );
}

export {
    lessThanTwoPlayersAlert
}