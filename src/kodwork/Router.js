import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Jobs from './pages/Jobs';
import JobsDetail from './pages/JobsDetail';
import Favorites from './pages/Favorites'

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const RouterStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerTintColor: '#ee534f' }} name="Jobs" component={Jobs} />
            <Stack.Screen options={{ drawerActiveTintColor: '#ee534f', headerTintColor: '#ee534f' }} name="JobsDetailScreen" component={JobsDetail} />
        </Stack.Navigator>
    );
};

const RouterDrawer = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="FavoritedJobsScreen" component={Favorites} />
        </Stack.Navigator>
    );
};

function Router() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                screenOptions={{
                    headerShown: false,
                }}>
                <Drawer.Screen options={{ drawerActiveTintColor: '#ee534f', headerTintColor: '#ee534f' }} name="Jobs " component={RouterStack} />
                <Drawer.Screen options={{ drawerActiveTintColor: '#ee534f', headerTintColor: '#ee534f' }} name="Favorited Jobs" component={RouterDrawer} />
            </Drawer.Navigator>
        </NavigationContainer >
    )
}

export default Router;
