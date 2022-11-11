import React from "react";
import { SafeAreaView, Text, Button } from "react-native";
import database from "@react-native-firebase/database";

export default () => {

    //database'den verileri çeker. ref() içine ne yazılırsa o verileri getirir, bi şey yazılmazsa tüm verileri getirir
    const checkDB = () => {
        const reference = database().ref('car/');
        reference.once('value').then(snapshot => {
            const response = snapshot.val()
            console.log(response);
        });
    };
    // database'i dinler. Butona basmasan bile tüm değişiklikleri consolda gösterir
    const listenDB = () => {
        const reference = database().ref('car/');
        reference.on('value', snapshot => {
            console.log(snapshot.val());
        });
    };

    //database'e veri göndermek için kullanılır.
    const setDB = () => {
        const reference = database().ref('car/rentable');

        reference.set({
            brand: 'Audi',
            model: 'A8',
            price: 128,
        })
    };

    //istediğin değeri database'de güncellemek için kullanılır
    const updateDB = () => {
        const reference = database().ref('car/rentable');

        reference.update({
            model: 'A3',
        })
    };

    //database'e daha önce gönderdiğin verilerin içine yenisini eklemek için kullanılır
    const pushDB = () => {
        const reference = database().ref('car/rentable');

        reference.push({
            brand: 'Passat',
            model: '81',
            price: 650,
        })
    };

    return (
        <SafeAreaView>
            <Text style={{ fontSize: 70 }}>Hello Firebase</Text>
            <Button title="Check DB" onPress={checkDB} />
            <Button title="Listen DB" onPress={listenDB} />
            <Button title="Set DB" onPress={setDB} />
            <Button title="Update DB" onPress={updateDB} />
            <Button title="Push DB" onPress={pushDB} />
        </SafeAreaView>
    )
}