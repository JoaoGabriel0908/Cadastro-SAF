import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cadastro from "../pages/Cadastro";
import Listagem from "../pages/Listagem";

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }}/>

            <Stack.Screen name="Listagem" component={Listagem} />
        </Stack.Navigator>
    );
}
