import { Alert, BackHandler } from "react-native";

const lessThanTwoPlayersAlert = () => {
    Alert.alert(
        'No hay jugadores seleccionados',
        'Por favor, selecciona dos o más jugadores', 
        [
        {text: 'OK'},
        ]
    );
}

const onBackPressAlert = () => {
    Alert.alert(
      'Salir',
      '¿Deseas salir?',
      [
        {
          text: 'No',
          onPress: () => {
            // Do nothing
          },
          style: 'cancel',
        },
        { text: 'Si', onPress: () => BackHandler.exitApp() },
      ],
      { cancelable: false }
    );

    return true;
  };

export {
    lessThanTwoPlayersAlert,
    onBackPressAlert
}