import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../pages/Login';
import Main from '../pages/Main';
import { useSelector } from 'react-redux';
import { loginSelector } from '../redux/LoginRedux';

const Stack = createNativeStackNavigator();

function MainNavigation() {

    const isLogin = useSelector(loginSelector)

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {isLogin ?
                    <Stack.Screen name="MainScreen" component={Main} />
                    :
                    <Stack.Screen name="LoginScreen" component={Login} />
                }
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainNavigation;
