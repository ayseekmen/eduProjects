
import React, { useState } from "react";
import { Text, SafeAreaView, View, TextInput, Button } from "react-native";

import { useDispatch } from "react-redux";

const Primary = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch({type: 'ADD_NAME', payload: {name: text}});
    };

    return (
        <SafeAreaView>
            <Text style={{ fontSize: 30 }}>Primary</Text>
            <View
                style={{
                    borderWidth: 1,
                    margin: 10,
                    padding: 5,
                    borderColor: '#e0e0e0',
                }}>
                <TextInput
                    value={text}
                    onChangeText={setText}
                    placeholder="İsim giriniz.."
                />
            </View>
            <Button title="Ekle" onPress={handleAdd} />
        </SafeAreaView>
    );
};

export default Primary;