import { PaperProvider } from "react-native-paper";
import PageTarefas from "./src/pages/PageTarefas";
import PageContador from "./src/pages/PageContador";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <Tab.Navigator>
          <Tab.Screen name="Contador" component={PageContador} />
          <Tab.Screen name="Tarefas" component={PageTarefas} />
        </Tab.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
}