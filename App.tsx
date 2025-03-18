import { RootStack } from "@/common/RootStack";
import { createStaticNavigation, NavigationContainer } from "@react-navigation/native";

export const App = () => {
  const Navigation = createStaticNavigation(RootStack);

  return (
    <Navigation />
  );
}
