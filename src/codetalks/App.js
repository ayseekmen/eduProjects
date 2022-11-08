import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FlashMessage from "react-native-flash-message";
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Login from './pages/Login'
import Sign from './pages/Sign'
import Rooms from './pages/Rooms'

const Stack = createNativeStackNavigator();

export default () => {
    const [userSession, setUserSession] = useState();

    useEffect(() => {
        auth().onAuthStateChanged((user) => {
            setUserSession(!!user);
        });
    }, []);

const AuthStack = () => {
    return (
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="LoginPage" component={Login} />
                <Stack.Screen name="SignPage" component={Sign} />
            </Stack.Navigator>
    );
}

return (
    <NavigationContainer>
        {!userSession ? (
            <AuthStack />
        ) : (
            <Stack.Navigator>
                <Stack.Screen
                    name="RoomsPage"
                    component={Rooms}
                    options={{
                        headerRight: () => (
                            <Icon
                                name="logout"
                                size={30}
                                color={'red'}
                                onPress={() => auth().signOut()}
                            />
                        ),
                    }}
                />
            </Stack.Navigator>
        )}
        <FlashMessage position="top" />
    </NavigationContainer>
);
};
