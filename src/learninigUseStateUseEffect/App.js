import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, View, Button, StyleSheet, Touchable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

function App() {
    const [number, setNumber] = useState(0);
    const [number2, setNumber2] = useState(0);

    function arttırNumber() {
        setNumber(number + 1);
    }

    function azaltNumber() {
        setNumber(number - 1);
    }

    useEffect(() => {
        setNumber2 (number * 2)
    }, [number])


    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.numberText}>Number: {number}</Text>
            <Text style={styles.numberText}>Counter: {number2}</Text>
            <View style={styles.buttons}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={arttırNumber} >
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={azaltNumber} >
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