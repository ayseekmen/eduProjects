import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Jobs from './pages/Jobs';
import JobsDetail from './pages/JobsDetail';
import Favorites from './pages/Favorites'

const Stack = createNativeStackNavigator();

function Router() {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                    <Stack.Screen name="Jobs" component={Jobs} />
                    <Stack.Screen name="JobsDetailScreen" component={JobsDetail} />
                    <Stack.Screen name="FavoritesScreen" component={Favorites} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Router;
