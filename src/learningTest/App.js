import React from "react";
import { SafeAreaView, TextInput, FlatList, Text, StyleSheet } from "react-native";
import Button from "./components/Button";

const App = () => {
    const [text, setText] = React.useState("");
    const [list, setList] = React.useState([]);

    const renderElements = ({ item }) => <Text>{item}</Text>

    function addToList() {
        if (!text) {
            return;
        }


        setList([...list, text])
    }



    return (
        <SafeAreaView style={styles.container} >
            <FlatList
                keyExtractor={(_, i) => i.toString()}
                testID="list" data={list} renderItem={renderElements}
            />

            <TextInput
                testID="input-area"
                placeholder="Add.."
                style={styles.input}
                onChangeText={setText}
            />

            <Button title="Add" onClick={addToList} />
        </SafeAreaView>
    )
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input: {
        backgroundColor: '#e0e0e0',
        margin: 10,
        padding: 10,
        borderRadius: 10,
    }
})