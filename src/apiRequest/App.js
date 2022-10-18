import React, { useState, useEffect } from "react";
import { SafeAreaView, View, ActivityIndicator, Button, FlatList } from "react-native";
import axios from "axios";
import UserCard from "./components/UserCard/UserCard";

const URL = 'https://jsonplaceholder.typicode.com/users';

function App() {
    const [loading, setLoading] = useState(true);
    const [userList, setUserList] = useState([]);

    async function fetchData() {
        const response = await axios.get(URL);
        setLoading(false);
        setUserList(response.data);
    }

    const renderUser = ({ item }) => (
        <UserCard name={item.name} email={item.email} username={item.username} />
    );

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <SafeAreaView>
            <View>
                {loading ? (
                    <ActivityIndicator size="large" />
                ) : (

                    < FlatList data={userList} renderItem={renderUser} />
                )}
            </View>
        </SafeAreaView>
    );
}

export default App;
