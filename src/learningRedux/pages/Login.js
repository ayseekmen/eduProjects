import React from "react";
import { Button, StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";
import { setLoginStatus } from "../redux/LoginRedux";

const Login = () => {

    const dispatch = useDispatch()

    const onPress = () => {
        dispatch(setLoginStatus(true))
    }

    return (
        <View style={styles.container}>
            <Button title='Giriş Yap!' onPress={onPress} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
    },
})

export default Login;