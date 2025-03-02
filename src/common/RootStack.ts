import { ROUTES } from "@/constants"
import { QuestionScreen } from "@/screens/QuestionScreen"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { WelcomeScreen } from "@screens/WelcomeScreen"

export const RootStack = createNativeStackNavigator({
    headerMode: 'none',
    inital: ROUTES.WELCOME,
    navigationOptions: {
        headerShown: false,
        header: null,
    },
    screens: {
        [ROUTES.WELCOME]: {
            screen: WelcomeScreen,
            options: {
                headerShown: false,
            }
        },
        [ROUTES.QUESTION]: {
            screen: QuestionScreen,
            options: {
                headerShown: false,
            }
        },
        
    }
})