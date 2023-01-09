import React from "react";
import { Text, TouchableOpacity, SafeAreaView, FlatList, StyleSheet, View } from "react-native";


export default function App() {

const alphabet = ["A", "B", "C", "D", "E", "F", "G"]

     
    const renderFlatlistItem = ({item}) =>  {
        
        return (
            <TouchableOpacity style={styles.container}
            onPress={() => {
                
            }}>
                <View style={styles.buttonContainer}>
                <Text style={styles.text}>{item}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView  style={styles.container}>
            <FlatList
            horizontal
                data={alphabet}
                renderItem={renderFlatlistItem}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    buttonContainer: {
        borderWidth: 1,
        margin: 5,
        height: 50,
        width: 40,
        justifyContent: 'center'
    },
    text: {
fontSize: 30,
alignSelf: 'center'
    }
})
