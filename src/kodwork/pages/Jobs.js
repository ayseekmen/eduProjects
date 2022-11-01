import axios from "axios";
import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, View, Text, StyleSheet, ActivityIndicator, TouchableOpacity } from "react-native";

const Jobs = ({ navigation }) => {

    const [result, setResult] = useState()

    useEffect(() => {
        axios.get('https://www.themuse.com/api/public/jobs?page=1')
            .then((res) => setResult(res.data.results))
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            {
                result ?
                    <FlatList
                        data={result}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity
                                    style={styles.cardContainer}

                                    onPress={() => {
                                        navigation.navigate('JobsDetailScreen', item)
                                    }}
                                >
                                    <Text style={styles.jobName} numberOfLines={1} >{item.name}</Text>
                                    <Text style={styles.jobCategories}>{item.categories[0].name}</Text>
                                    <View style={styles.jobLocationsWrapper}>
                                        <Text style={styles.jobLocations}>{item.locations[0].name}</Text>
                                    </View>
                                    <Text style={styles.jobLevels}>{item.levels[0].name}</Text>
                                </TouchableOpacity>
                            )
                        }}
                    />
                    :
                    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#ebeff1' }}>
                        <ActivityIndicator color={'#ee6b67'} size='large' />
                    </View>
            }
        </SafeAreaView>
    )
}

export default Jobs;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    cardContainer: {
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#bdbdbd',
        margin: 8,
        borderRadius: 5,
        padding: 3,
    },
    jobName: {
        marginTop: 3,
        marginLeft: 3,
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black',
    },
    jobCategories: {
        marginLeft: 3,
        fontSize: 19,
    },
    jobLocationsWrapper: {
        backgroundColor: '#ee534f',
        alignSelf: 'flex-start',
        borderRadius: 20,
        margin: 5,
        marginLeft: 3,
    },
    jobLocations: {
        color: 'white',
        fontWeight: 'bold',
        margin: 3,
        padding: 2,
    },
    jobLevels: {
        color: '#ee534f',
        fontWeight: 'bold',
        alignSelf: 'flex-end',
        marginRight: 5,
        fontSize: 15,
        marginBottom: 5
    },
});