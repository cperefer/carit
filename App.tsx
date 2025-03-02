import { RootStack } from "@/common/RootStack";
import { createStaticNavigation, NavigationContainer } from "@react-navigation/native";
import { WelcomeScreen } from "@screens/WelcomeScreen";
import { SafeAreaView } from "react-native";

export const App = () => {
  const Navigation = createStaticNavigation(RootStack);
  return (
    <Navigation />
  );
}
