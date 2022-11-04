import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FlashMessage from "react-native-flash-message";
import Login from './pages/auth/Login'
import Sign from './pages/auth/Sign'
import Messages from "./pages/Messages/Messages";

const Stack = createNativeStackNavigator();

export default () => {
    const AuthStack = () => {
        return (
            <Stack.Navigator screenOptions={{headerShown : false}}>
                <Stack.Screen name="LoginPage" component={Login} />
                <Stack.Screen name="SignPage" component={Sign} />
            </Stack.Navigator>
        );
    };

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown : false}}>
                <Stack.Screen name="AuthStack" component={AuthStack} />
                <Stack.Screen name="SignPage" component={Sign} />
                <Stack.Screen name="MessagePage" component={Messages} />

            </Stack.Navigator>
            <FlashMessage position="top" />
        </NavigationContainer>
    );
};