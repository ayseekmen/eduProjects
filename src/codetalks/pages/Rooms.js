import React, { useState } from "react";
import { Button, FlatList, Modal, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function Rooms() {

    const [rooms, setRooms] = useState([1])
    const [newRoom, setNewRoom] = useState("")
    const [modal, setModal] = useState(false)

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                numColumns={2}
                data={rooms}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <Text>{item}</Text>
                        </View>
                    )
                }}
            />
            <TouchableOpacity
                onPress={() => setModal(true)}>
                <Icon name="plus" color="white" size={30} />
            </TouchableOpacity>
            <Modal
                visible={modal}
                transparent>
                <View>
                    <TextInput
                        value={newRoom}
                        onChangeText={setNewRoom} />
                    <Button title='Ekle' onPress={() => {
                        setModal(false)
                        setRooms([...rooms, newRoom])
                    }} />
                </View>
            </Modal>
        </SafeAreaView>
    );
}

export default Rooms;

const styles = StyleSheet.create({
    container: {

    },
})
    
