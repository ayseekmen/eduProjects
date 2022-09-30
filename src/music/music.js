import React from "react";
import { SafeAreaView, Text, View, FlatList, StyleSheet } from 'react-native';
import music_data from './music-data.json';
import SongCard from "./companents/SongCard/SongCard";

function App() {
const renderSong = ({ item }) => <SongCard song={item} />;

const renderSeperator = () => <View style={styles.seperator} />

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <FlatList
                    keyExtractor={item => item.id}
                    data={music_data}
                    renderItem={renderSong}
                    ItemSeparatorComponent={renderSeperator}
                />
            </View>
        </SafeAreaView>
    );
}

export default App;

const styles = StyleSheet.create({
    container: { flex: 1 },
    seperator: {
        borderWidth: 1,
        borderColor: '#e0e0e0',
    }
});
