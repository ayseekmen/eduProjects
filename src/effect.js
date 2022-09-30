import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, View, Button } from "react-native";

function App() {
    const [helloFlag, setHelloFlag] = useState(true)

    function updateFlag() {
        setHelloFlag(!helloFlag);
    }

    return (
        <SafeAreaView>
            <Text>Hello Lifecycle</Text>
            <Button title="Up!" onPress={updateFlag} />
            {helloFlag && <Hello />}
        </SafeAreaView>
    );
}

export default App;

function Hello() {
    useEffect(() => {
        console.log('Merhaba Dünya!');

        return () => {
            console.log('Güle Güle Dünya!');
        };
    }, []);

    return (
        <View style={{ backgroundColor: 'aqua', padding: 10 }}>
            <Text>I'm Hello Companent</Text>
        </View>
    );
}
