import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, Linking, ScrollView } from 'react-native';
import useFetch from '../hooks/useFetch';

const MealDetail = ({ route }) => {
    const { idMeal } = route.params
    const { data, loading } = useFetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)

    if (loading) {
        return <Text>
            Yükleniyor
        </Text>
    }


    return (
        <ScrollView style={styles.container}>
            <Image style={styles.image} source={{ uri: data.meals[0].strMealThumb }} />
            <View>
                <Text style={styles.title}>{data.meals[0].strMeal}</Text>
                <Text style={styles.sub_title}>{data.meals[0].strArea}</Text>
                <View style={styles.seperator} />
                <Text style={styles.desc}>{data.meals[0].strInstructions}</Text>
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => Linking.openURL(data.meals[0].strYoutube)}
            >
                <Text style={styles.button_title}>Watch on YouTube</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}



const styles = StyleSheet.create({
    container: {
        marginBottom: 40,
    },
    image: {
        width: Dimensions.get("window").width,
        height: 275,
        resizeMode: "cover",
    },
    title: {
        fontSize: 28,
        color: "#A52A2A",
        fontWeight: 'bold',
        paddingLeft: 5,
        paddingTop: 8,
        marginLeft: 10,
    },
    sub_title: {
        color: "#A52A2A",
        paddingLeft: 5,
        borderBottomWidth: 1,
        borderColor: "rgba(0,0,0,.2)",
        paddingBottom: 5,
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 10
    },
    desc: {
        paddingLeft: 5,
        paddingRight: 5,
        textAlign: 'justify',
        color: "black",
        paddingBottom: 10,
        margin: 10,
    },
    button: {
        backgroundColor: "#FF0000",
        padding: 12,
        margin: 5,
        borderRadius: 5,
    },
    button_title: {
        color: "white",
        textAlign: "center",
        fontWeight: "700",
        fontSize: 15,
    },
    seperator: {
        backgroundColor: '#bdbdbd',
        width: '100%',
        height: 1,
    }
})

export default MealDetail;