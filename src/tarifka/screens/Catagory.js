import React from 'react';
import { SafeAreaView, Text, StyleSheet, FlatList, View } from 'react-native'
import CategoryCard from '../components/CategoryCard/CategoryCard';
import useFetch from '../hooks/useFetch'

const Category = ({ navigation }) => {

    const { data, error, loading } = useFetch("https://www.themealdb.com/api/json/v1/1/categories.php");


    const renderCategoryList = ({ item }) => <CategoryCard items={item} onSelect={() => handleSelect(item.strCategory)} />

    const handleSelect = (category) => {
        navigation.navigate('DetailScreen', { category });
    }

    if (loading) {
        return (
            <Text>Yükleniyor</Text>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.header_title}>Categories</Text>
            </View>
            <View style={styles.categories_container}>
                <FlatList data={data.categories} renderItem={renderCategoryList} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header_title: {
        color: '#ffa500',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: "center",
        padding: 13,
    },
    categories_container: {
        flex: 1,
        backgroundColor: '#ffa500',
        paddingTop: 7,
        paddingHorizontal: 7,
    }
})

export default Category;