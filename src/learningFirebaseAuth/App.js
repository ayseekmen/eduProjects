import React from "react";
import { SafeAreaView, Text, Button } from "react-native";
import auth from '@react-native-firebase/auth';

export default () => {

    // kayıt olma işlemi
    const singUp = () => {
        auth().createUserWithEmailAndPassword(
            'jane.doe@example.com',
            'SuperSecretPassword!',
        )
        .then(res => console.log(res))
        .catch(err => console.log(err));
    };

    // giriş yapma işlemi
    const singIn = () => {
        auth().signInWithEmailAndPassword(
            'jane.doe@example.com',
            'SuperSecretPassword!',
        )
        .then(res => console.log('Signed in.'))
        .catch(err => console.log(err));
    }

    // çıkış yapma işlemi
    const singOut = () => {
        auth().signOut()
        .then(res => console.log('Signed out.'))
        .catch(err => console.log(err));
    }

    //giriş yapmış bir kullanıcı var mı, varsa bilgilerini yazdırır
    const checkOut = () => {
       const user = auth().currentUser
       console.log(user)
    }

    return (
        <SafeAreaView>
            <Text style={{fontSize: 70}}>Hello Firebase</Text>
            <Button title="Sing In" onPress={singIn}/>
            <Button title="Sing Up" onPress={singUp}/>
            <Button title="Sing Out" onPress={singOut}/>
            <Button title="Check User" onPress={checkOut}/>
        </SafeAreaView>
    );
};