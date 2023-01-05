import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, View, Button, StyleSheet, Touchable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

function App() {

    const alphabet = ["A", "B", "C", "D", "E"]


    const [index, setIndex] = useState(0);

    function arttırHarf() {
        if (index == alphabet.length - 1) {
            setIndex(0)
        } else {
            setIndex(index + 1)
        }
    }

    function azaltHarf() {
        if (index == 0) {
            setIndex(alphabet.length - 1)
        } else {
            setIndex(index - 1)
        }
        
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.numberText}>Harf: {alphabet[index]}</Text>
            <View style={styles.buttons}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={arttırHarf} >
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={azaltHarf} >
                    <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    numberText: {
        fontSize: 40,
        margin: 20
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        paddingHorizontal: 50,
        marginVertical: 50
    },
    button: {
        height: 40,
        width: 40,
        borderWidth: 1,
        borderColor: 'black'
    },
    buttonText: {
        fontSize: 30,
        alignSelf: 'center'
    }
})