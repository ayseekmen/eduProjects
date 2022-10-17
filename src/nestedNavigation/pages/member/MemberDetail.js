import React from "react";
import { SafeAreaView, Text, Button } from "react-native";

function MemberDetail({ navigation }) {
    return (
        <SafeAreaView>
            <Text>Hello MemberDetail</Text>
            <Button
                title="Update"
                onPress={() => navigation.navigate('MemberUpdateScreen')}
            />
        </SafeAreaView>
    );
}

export default MemberDetail;