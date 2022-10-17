import React from "react";
import { SafeAreaView, Text, Button } from "react-native";

function Profile({navigation}) {
    return (
        <SafeAreaView>
            <Text>Hello Profile</Text>
            <Button
                title="Edit"
                onPress={() => navigation.navigate('ProfileEditScreen')}
            />
        </SafeAreaView>
    );
}

export default Profile;