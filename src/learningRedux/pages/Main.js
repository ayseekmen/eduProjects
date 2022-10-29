import React from "react";
import { Button, StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";
import { setLoginStatus } from "../redux/LoginRedux";

const Main = () => {

    const dispatch = useDispatch()

    const onPress = () => {
        dispatch(setLoginStatus(false))
    }

    return (
        <View style={styles.container}>
            <Button title='Çıkış Yap!' onPress={onPress} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        flex: 1,
    },
})

export default Main;