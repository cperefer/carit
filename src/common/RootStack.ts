import { ROUTES } from "@/constants"
import { 
    AnswerResultScreen,
    CreatePlayerComponent, 
    NextPlayerScreen, 
    PlayerScreen, 
    QuestionScreen, 
    StartGameScreen, 
    WelcomeScreen 
} from "@/screens"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

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
        [ROUTES.ANSWER_RESULT]: {
            screen: AnswerResultScreen,
            options: {
                headerShown: false,
            }
        },
        [ROUTES.CREATE_PLAYER]: {
            screen: CreatePlayerComponent,
            options: {
                headerShown: false,
            }
        },
        [ROUTES.NEXT_PLAYER]: {
            screen: NextPlayerScreen,
            options: {
                headerShown: false,
            }
        },
        [ROUTES.PLAYERS_SELECTION]: {
            screen: PlayerScreen,
            options: {
                headerShown: false,
            }
        },
        [ROUTES.START_GAME]: {
            screen: StartGameScreen,
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