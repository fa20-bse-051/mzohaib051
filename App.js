import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen2 from "./MainScreen2";
import MainScreen3 from "./MainScreen3";

export default function App() {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen
                    name="MainScreen2"
                    component={MainScreen2}
                    options={{
                        headerShown: false,
                    }}
                />

                <Stack.Screen
                    name="MainScreen3"
                    component={MainScreen3}
                    options={{
                        headerShown: false,
                    }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}
