import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Category from './screens/Catagory';
import Detail from './screens/Detail';
import MealDetail from './screens/MealDetail';

const Router = () => {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='CategoryScreen'
                    component={Category}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name='DetailScreen'
                    component={Detail}
                    options={{
                        title: "Meals",
                        headerTintColor: "#FFA500",
                        headerTitleStyle: {
                            color: "#FFA500",
                            fontSize: 20,
                            textAlign: "center",
                            padding: 13,
                        },
                        headerBackTitle: "Catagories"

                    }}

                />
                <Stack.Screen
                    name='MealDetailScreen'
                    component={MealDetail}
                    options={{
                        title: "Detail",
                        headerTintColor: "#FFA500",
                        headerTitleStyle: {
                            color: "#FFA500",
                            fontSize: 20,
                            textAlign: "center",
                            padding: 13,
                        },


                    }}

                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header_title: {
        color: '#FFA500',
        fontSize: 20,
        fontWeight: '700',
        textAlign: "center",
        padding: 5,
    },
    categories_container: {
        flex: 1,
        backgroundColor: '#FFA500',
        padding: 5
    }
})

export default Router;