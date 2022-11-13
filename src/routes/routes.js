import { createNativeStackNavigator } from "@react-navigation/native-stack";
import COLORS from "../const/Colors";
import Cadastro from "../pages/Cadastro";
import Listagem from "../pages/Listagem";
import Splash from "../pages/Splash";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Symbian"
        component={Splash}
        options={{ statusBarColor: COLORS.azulEscuro, headerTitleAlign: "center", headerTransparent: true, headerTintColor: COLORS.branco }}
      />
      <Stack.Screen
        name="Cadastro"
        component={Cadastro}
        options={{
          headerTitleAlign: "center",
          statusBarColor: COLORS.azulEscuro,
          headerTransparent: true,
          headerTintColor: COLORS.branco,
        }}
      />
      <Stack.Screen
        name="Listagem"
        component={Listagem}
        options={{
            headerTitleAlign: "center",
            statusBarColor: COLORS.azulEscuro,
            headerTransparent: true,
            headerTintColor: COLORS.branco,
        }}
      />
    </Stack.Navigator>
  );
}
