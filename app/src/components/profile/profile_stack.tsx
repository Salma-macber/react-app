
import Account from "../profile/account";
import { RootStackParamList } from "../../../my_routes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";



const Stack = createNativeStackNavigator<RootStackParamList>();

export function ProfileStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Profile" component={Account}
                initialParams={{ name: "" }}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
}