import React, { useState } from "react";
import { SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Platform, ActivityIndicator } from "react-native";
import auth from '@react-native-firebase/auth';
import { showMessage } from "react-native-flash-message";
import authErrorMessageParser from "../utils/authErrorMessageParser";




const Sign = ({ navigation }) => {
    const [loading, setLoading] = useState(false)

    const [usermail, setUsermail] = useState("")
    const [password, setPassword] = useState("")
    const [repassword, setRepassword] = useState("")

    function handleLogin() {
        navigation.goBack();
    }

    async function handleSubmit() {
        setLoading(true)
        if (password !== repassword) {
            showMessage({
                message: 'Şifreler uyuşmuyor',
                type: "danger",
            });
            return;
        }

        try {
            await auth().createUserWithEmailAndPassword(
                usermail,
                password,
                repassword
            );
            navigation.navigate("RoomsPage");
            showMessage({
                message: 'Kullanıcı oluşturuldu',
                type: "success",
            });
            setLoading(false);
        } catch (error) {
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
                secureTextEntry />
            <TextInput
                autoCapitalize="none"
                value={repassword}
                onChangeText={setRepassword}
                style={styles.input}
                placeholder='şifrenizi tekrar giriniz..'
                placeholderTextColor={'#ffe8d6'}
                secureTextEntry />


            <TouchableOpacity
                style={styles.signUpButtonContainer}
                onPress={handleSubmit}>
                    {loading ? (<ActivityIndicator color={'white'}/>) :  
                (<Text style={styles.signUpButton}>Kayıt Ol</Text>)}
            </TouchableOpacity>



            <TouchableOpacity
                style={styles.backButtonContainer}
                onPress={handleLogin}>
                <Text style={styles.backButton}>Geri</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}


export default Sign;

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

    //

    signUpButtonContainer: {
        backgroundColor: '#fe9f40',
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
        color: '#ffffff',
    },
    backButtonContainer: {
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#fe9f40',
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
        padding: 8,
    },
    backButton: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fe9f40',
    },
})