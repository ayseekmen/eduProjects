import React from "react";
import { SafeAreaView, Text, Button } from "react-native";

function MemberUpdate({ navigation }) {
    return (
        <SafeAreaView>
            <Text>Hello MemberUpdate</Text>
            <Button
                title="ProfileEdit"
                onPress={() => navigation.navigate("ProfileEditScreen")}
            />
        </SafeAreaView>
    );
}

export default MemberUpdate;