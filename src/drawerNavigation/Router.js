import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';

import Favorites from './pages/Favorites';
import Products from './pages/Products';

const Drawer = createDrawerNavigator();

function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                screenOptions={{
                    headerShown: false,
                }}>
                <Drawer.Screen name="Products" component={Products} />
                <Drawer.Screen name="Favorites" component={Favorites} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default App;