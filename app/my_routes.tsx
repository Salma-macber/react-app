import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import Home from "./src/components/home/home";
import Account from "./src/components/profile/account";
import { RouteProp } from "@react-navigation/native";

export type RootStackParamList = {
    Home: undefined;
    Profile: { name: string };
};

// Generic type for screen props
export type PropsD<ScreenName extends keyof RootStackParamList> = {
    navigation: NativeStackNavigationProp<RootStackParamList, ScreenName>;
    route: RouteProp<RootStackParamList, ScreenName>;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function MyRoutes() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Profile"
                component={Account}
                initialParams={{ name: "" }}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}