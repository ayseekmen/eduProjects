import React, { useState, useEffect } from "react";
import { FlatList, Modal, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import database from "@react-native-firebase/database";

import { units } from "../styles/units";

const Rooms = ({ navigation }) => {

    const [rooms, setRooms] = useState([])
    const [newRoom, setNewRoom] = useState("")
    const [modal, setModal] = useState(false)

    //database'e veri göndermek için kullanılır.
    const setRoomsToDB = (rooms) => {
        const reference = database().ref('rooms');
        reference.set(rooms)
    };

    useEffect(() => {
        // database'i dinler. Bir kere çalışması yeterlidir.
        const listenDB = () => {
            const reference = database().ref('myData/');
            reference.on('value', snapshot => {
                setRooms(snapshot.val())
            });
        };
        listenDB()
    }, [])
    console.log(myData)


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.flatlist_container}>
                <FlatList
                    numColumns={2}
                    data={rooms}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity
                                style={styles.body_container}
                                onPress={() => {
                                    navigation.navigate("MessagesPage", { item })
                                }}>
                                <Text style={styles.item_text} >{item}</Text>
                            </TouchableOpacity>
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
                                placeholder="Oda adı..."
                                multiline
                                value={newRoom}
                                onChangeText={setNewRoom}
                            />
                        </View>

                        <TouchableOpacity
                            style={styles.input_button_container}
                            onPress={() => {
                                setModal(false)
                                if (rooms) {
                                    setRoomsToDB([...rooms, newRoom.trim()])
                                } else {
                                    setRoomsToDB([newRoom.trim()])
                                }
                                setNewRoom("")
                            }} >
                            <Text style={styles.input_button_text}>Ekle</Text>
                        </TouchableOpacity>

                    </View>
                </TouchableOpacity>
            </Modal>
        </SafeAreaView>
    );
}

export default Rooms;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    flatlist_container: {
        alignItems: 'center',
    },
    body_container: {
        width: units.height / 5,
        height: units.height / 4,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 10,
        borderColor: '#e0e0e0',
    },
    item_text: {
        fontSize: 28,
        color: '#ff9f40',
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
        backgroundColor: '#fe9f40',
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
        padding: 10,
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
    }
})

