import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, Modal, Text, TextInput, View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import database from "@react-native-firebase/database";
import auth from '@react-native-firebase/auth';
import { tr } from 'date-fns/locale';
import { formatDistance, parseISO } from 'date-fns';

import parseContentData from "../../banaNe/utils/parseContentData";
import { units } from "../styles/units";

function Messages({ route, navigation }) {

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

    const [modal, setModal] = useState(false)

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

    useEffect(() => {
        navigation.setOptions({
            title: roomName
        })
    }, [])


    return (
        <SafeAreaView style={styles.container} >
            <View style={styles.header_container}>
                <Text style={styles.header_text}>{roomName} odası kuruldu!</Text>
            </View>

            <View style={styles.flatlist_container}>
                <FlatList
                    inverted={true}
                    data={allMessage}
                    renderItem={({ item }) => {
                        const formattedDate = formatDistance(parseISO(item.date), new Date(), {
                            addSuffix: true,
                            locale: tr,
                        })
                        return (
                            <View style={styles.body_container}>
                                <View style={styles.username_date_container}>
                                    <Text>{item.username}</Text>
                                    <Text style={styles.date}>{formattedDate}</Text>
                                </View>
                                <Text style={styles.message}>{item.message}</Text>
                            </View>
                        )
                    }}
                />
            </View>

            <TouchableOpacity style={styles.floating_button}
                onPress={() => setModal(true)}>
                <Icon name="plus" color="white" size={30} />
            </TouchableOpacity>

            <Modal
                style={styles.modal}
                visible={modal}
                transparent
                animationType='slide'
            >
                <TouchableOpacity style={styles.modal_container} onPress={() => { setModal(false) }} >
                    <View style={styles.modal_box}>
                        <View style={styles.input_container}>
                            <TextInput
                                style={styles.input}
                                placeholder="Mesajın..."
                                multiline
                                value={message}
                                onChangeText={setMessage}
                            />
                        </View>
                        <TouchableOpacity
                            style={styles.input_button_container}
                            onPress={() => {
                                sendMessage()
                                setModal(false)
                                setMessage("")
                            }} >
                            <Text style={styles.input_button_text}>Gönder</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </Modal>
        </SafeAreaView>
    );
}

export default Messages;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffb74d',
    },
    header_container: {
        borderWidth: 1,
        width: units.width / 1.05,
        height: units.height / 18,
        borderColor: 'white',
        alignSelf: "center",
        borderStyle: 'dotted',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15,
        borderRadius: 10,
    },
    header_text: {
        color: 'white',
        fontSize: 20,
    },
    flatlist_container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 90,
    },
    body_container: {
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 10,
        backgroundColor: 'white',
        width: units.width / 1.05,
        marginVertical: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    username_date_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 3,
    },
    date: {
        fontStyle: 'italic',
    },
    message: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 15
    },
    floating_button: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        borderRadius: 99,
        width: units.height / 13,
        height: units.height / 13,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fea040',
        borderWidth: 1,
        borderColor: '#ef973d',
    },
    modal: {
        flex: 1,
    },
    modal_container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)',
    },
    modal_box: {
        backgroundColor: 'white',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        height: units.height / 3,
        position: 'absolute',
        bottom: 0,
        width: units.width / 1.05,
        alignSelf: 'center',
        padding: 10
    },
    input_container: {
        flex: 1,
    },
    input: {
        flex: 1,
    },
    input_button_container: {
        padding: 8,
        margin: 10,
        marginBottom: 15,
        borderRadius: 5,
        alignItems: 'center',
        backgroundColor: '#ff9f40',
    },
    input_button_text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
})