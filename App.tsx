import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import Administracao from "./Administracao";
import Informatica from "./Informatica";
import BemEstar from "./BemEstar";
import Fotografia from "./Fotografia";


// Criar o elemento que nós a ajudará a empilhar as telas 
const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Administracao" component={Administracao} />
        <Stack.Screen name="Informatica" component={Informatica} />
        <Stack.Screen name="BemEstar" component={BemEstar} />
        <Stack.Screen name="Fotografia" component={Fotografia} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


