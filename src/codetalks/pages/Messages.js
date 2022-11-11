import React, { useEffect, useState } from "react";
import { Button, FlatList, SafeAreaView, Text, TextInput, View } from "react-native";
import database from "@react-native-firebase/database";
import auth from '@react-native-firebase/auth';
import parseContentData from "../../banaNe/utils/parseContentData";

function Messages({ route }) {

    const roomName = route.params.item

    const [message, setMessage] = useState("")
    const [allMessage, setAllMessage] = useState([])

    const sendMessage = () => {
        const userMail = auth().currentUser.email;

        const reference = database().ref(`${roomName}/`);

        reference.push({
            username: userMail.split('@')[0],
            date: new Date().toISOString(),
            message: message
        })
    };


    useEffect(() => {
        // database'i dinler. Bir kere çalışması yeterlidir.
        const listenDB = () => {
            const reference = database().ref(`${roomName}`);
            reference.on('value', snapshot => {
                const contentData = snapshot.val();

                const parsedData = parseContentData(contentData || {});
                setAllMessage(parsedData);
            });
        };

        listenDB()
    }, [])
    return (
        <SafeAreaView>

            <View style={{ height: 200, width: 400, backgroundColor: "grey" }}>

                <TextInput
                    placeholder="Oda adı..."
                    value={message}
                    onChangeText={setMessage}
                    multiline
                />

            </View>

            <FlatList
            inverted={true}
                data={allMessage}
                renderItem={({ item }) => {
                    console.log(item.message)
                    return (
                        <Text>{item.message}</Text>
                    )
                }}
            />
            <Button title="gönder" onPress={sendMessage} />
        </SafeAreaView>
    );
}

export default Messages;