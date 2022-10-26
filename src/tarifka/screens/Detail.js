import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Details from '../components/DetailCard/Details';
import useFetch from '../hooks/useFetch';

const Detail = ({ route, navigation }) => {

    const { category } = route.params;

    const { data, error, loading } = useFetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + category)

    if (loading) {
        return <Text>
            Yükleniyor
        </Text>
    }

    const renderMealsWithCategory = ({ item }) => <Details item={item} onSelected={() => handlePageChange(item.idMeal)} />

    const handlePageChange = (idMeal) => {
        navigation.navigate("MealDetailScreen", { idMeal })
    }

    return (
        <View style={styles.container}>
            <FlatList data={data.meals} renderItem={renderMealsWithCategory} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFA500",
        paddingBottom: 35,
    }
})

export default Detail;