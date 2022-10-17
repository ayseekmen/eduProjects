import React from "react";
import { Button, SafeAreaView, Text } from "react-native";

function Member({ navigation }) {
    return (
        <SafeAreaView>
            <Text>Hello Member</Text>
            <Button
                title="Detail"
                onPress={() => navigation.navigate('MemberDetailScreen')}
            />
        </SafeAreaView>
    );
}

export default Member;