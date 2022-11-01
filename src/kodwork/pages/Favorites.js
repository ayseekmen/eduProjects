import React from "react";
import { FlatList, SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { deleteFavorited, favoritedSelector } from "../redux/FavoritedRedux";
import { untis } from "../styles/units";

const Favorites = ({ navigation }) => {

    const favorited = useSelector(favoritedSelector)

    const dispatch = useDispatch()

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={favorited}
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

                            <TouchableOpacity
                                onPress={() => dispatch(deleteFavorited(item))}
                                style={styles.removeButton}>
                                <Text style={styles.removeButtonText}>Remove</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                    )
                }}
            />
        </SafeAreaView>
    )
}


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
    removeButton: {
        height: untis.height / 20,
        width: untis.width / 1.12,
        backgroundColor: '#ee534f',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 8,
        marginVertical: 4,
    },
    removeButtonText: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
    },
});


export default Favorites;