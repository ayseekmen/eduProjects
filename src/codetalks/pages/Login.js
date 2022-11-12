import React, { useState } from "react";
import { SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Platform, ActivityIndicator} from "react-native";
import { showMessage } from "react-native-flash-message";
import auth from '@react-native-firebase/auth';

import authErrorMessageParser from "../utils/authErrorMessageParser";

const Login = ({ navigation }) => {

    const [loading, setLoading] = useState(false)
    const [usermail, setUsermail] = useState("")
    const [password, setPassword] = useState("")

    function handleSignUp() {
        navigation.navigate("SignPage");
    }

    async function handleFormSubmit() {
        try {
            setLoading(true);
            await auth().signInWithEmailAndPassword(
                usermail,
                password
            ).then(() => { navigation.navigate("RoomsPage") })
            setLoading(false);
        } catch (error) {
            console.log(error)
            showMessage({
                message: authErrorMessageParser(error.code),
                type: "danger",
            });
            setLoading(false);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.appName}>codetalks</Text>

            <TextInput
                autoCapitalize="none"
                value={usermail}
                onChangeText={setUsermail}
                style={styles.input}
                placeholder='e-postanızı giriniz..'
                placeholderTextColor={'#ffe8d6'}
            />
            <TextInput
                autoCapitalize="none"
                value={password}
                onChangeText={setPassword}
                style={styles.input}
                placeholder='şifrenizi giriniz..'
                placeholderTextColor={'#ffe8d6'}
                secureTextEntry
            />

            <TouchableOpacity
                onPress={handleFormSubmit}
                style={styles.loginButtonContainer}>
                {loading ? (<ActivityIndicator color={'white'} />) :

                    (<Text style={styles.loginButton}>Giriş Yap</Text>)}
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.signUpButtonContainer}
                onPress={handleSignUp}>
                <Text style={styles.signUpButton}>Kayıt Ol</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fe6f00',
    },
    appName: {
        textAlign: 'center',
        fontSize: 40,
        color: '#e0e0e0',
        paddingVertical: Platform.OS === 'android' ? 130 : 170
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#ffe8d6',
        padding: 10,
        marginHorizontal: 20,
        marginVertical: 15,
        fontSize: 17,
    },
    loginButtonContainer: {
        backgroundColor: '#fe9f40',
        borderWidth: 1,
        borderColor: '#fe9f40',
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
        padding: 8,
    },
    loginButton: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    signUpButtonContainer: {
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#fe9f40',
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
        padding: 8,
    },
    signUpButton: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fe9f40',
    },
})