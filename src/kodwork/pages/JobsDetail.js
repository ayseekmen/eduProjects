import React, { useEffect } from "react";
import { SafeAreaView, Text, View, useWindowDimensions, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import RenderHtml from 'react-native-render-html';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch } from "react-redux";
import { setFavorited } from "../redux/FavoritedRedux";
import { untis } from "../styles/units";

function JobsDetail({ route, navigation }) {

    const params = route.params


    const source = {
        html: params.contents
    };
    const { width } = useWindowDimensions();


    const dispatch = useDispatch()

    const onPress = () => {
        dispatch(setFavorited(params))
    }


    //sayfadayken navigasyon header başlığını değistirmek
    useEffect(() => {
        navigation.setOptions({
            title: params.name
        })
    }, [])


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.info}>
                <Text style={styles.jobName} numberOfLines={1} >{params.name}</Text>
                <Text style={styles.sideheaderLoc}>Locations: {" "}
                    <Text style={styles.jobLocations}>{params.locations[0].name}</Text>
                </Text>
                <Text style={styles.sideheaderLev}>Job Level: {" "}
                    <Text style={styles.jobLevels} >{params.levels[0].name}</Text>
                </Text>
                <Text style={styles.subtitle}>Job Detail</Text>
            </View>

            <ScrollView style={styles.desciription}>
                <RenderHtml
                    contentWidth={width}
                    source={source}
                />
            </ScrollView>

            <View style={styles.buttonWrapper}>
                <TouchableOpacity style={styles.submitButton} >
                    <Icon name={"login"} size={20} color='#ffffff' />
                    <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.favoriteJobButton} onPress={onPress}>
                    <Icon name={"cards-heart"} size={20} color='#ffffff' />
                    <Text style={styles.favoriteJobButtonText}>Favorite Job</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default JobsDetail;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
    },
    info: {
        backgroundColor: '#f2f2f2',
        marginLeft: 10,
        marginRight: 10,
        borderColor: '#f2f2f2',
        borderWidth: 1,
    },
    jobName: {
        color: '#37464f',
        fontWeight: 'bold',
        fontSize: 30,
        padding: 4,
    },
    sideheaderLoc: {
        padding: 4,
        color: '#ee534f',
        fontWeight: 'bold',
    },
    jobLocations: {
        color: 'black',
        fontWeight: 'bold',
    },
    sideheaderLev: {
        padding: 4,
        color: '#ee534f',
        fontWeight: 'bold',
    },
    jobLevels: {
        color: 'black',
        fontWeight: 'bold',
    },
    subtitle: {
        padding: 4,
        fontSize: 25,
        fontWeight: 'bold',
        color: '#37464f',
        alignSelf: 'center',
    },
    //
    desciription: {
        backgroundColor: '#ffffff',
        borderColor: '#e6e6e6',
        borderWidth: 1,
        height: untis.height / 1.7,
        marginLeft: 10,
        marginRight: 10,
    },
    //
    buttonWrapper: {
        backgroundColor: '#f2f2f2',
        flexDirection: 'row',
        marginHorizontal: 10,
        borderColor: '#f2f2f2',
        borderWidth: 1,
        justifyContent: 'center',
        paddingTop: 15,
    },
    submitButton: {
        backgroundColor: '#ee534f',
        borderRadius: 10,
        width: untis.width / 2.5,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        marginHorizontal: 10,
        flexDirection: "row"
    },
    submitButtonText: {
        color: '#ffffff',
        fontSize: 17,
        fontWeight: 'bold',
        marginLeft: 5
    },
    favoriteJobButton: {
        backgroundColor: '#ee534f',
        borderRadius: 10,
        width: 170,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        marginHorizontal: 10,
        flexDirection: "row"
    },
    favoriteJobButtonText: {
        color: '#ffffff',
        fontSize: 17,
        fontWeight: 'bold',
        marginLeft: 5
    },
})