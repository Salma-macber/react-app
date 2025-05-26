import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from 'react';
import About from "./src/components/about/about";
import { Ionicons } from "@expo/vector-icons";
import MyRoutes from "./my_routes";
import { ProfileStack } from "./src/components/profile/profile_stack";



const Tab = createBottomTabNavigator();


export default function App() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: true,
            tabBarActiveTintColor: "purple",
            tabBarInactiveTintColor: "grey",
        }}>
            <Tab.Screen name="oz" component={MyRoutes} options={{
                tabBarLabel: "Home",
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="home" color={color} size={size} />
                )
            }} />
            <Tab.Screen name="ProfileTab" component={ProfileStack} options={{
                tabBarLabel: "Profile",
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="person-circle" color={color} size={size} />
                )
            }} />
            <Tab.Screen name="About" component={About} options={{
                tabBarLabel: "About",
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="information-circle" color={color} size={size} />
                )
            }} />
        </Tab.Navigator>
    );
}