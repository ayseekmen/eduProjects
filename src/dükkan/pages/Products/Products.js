import React from "react";
import { FlatList, View, Text } from 'react-native';
import Config from "react-native-config";
import { useSelector } from "react-redux";
import Error from "../../components/Error/Error";
import Loading from "../../components/Loading/Loading";

import ProductCard from "../../components/ProductCard";
import useFetch from "../../hooks/useFetch";

const Products = ({ navigation }) => {
    const user = useSelector(s => s.user);
    const { loading, data, error } = useFetch(Config.API_PRODUCT_URL);

    const handleProductSelect = id => {
        navigation.navigate('DetailPage', { id });
    };

    const renderProduct = ({ item }) => (
        <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />
    );

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <Error />;
    }

    return (
        <View>
            <Text>Hello: {user.name.firstname}</Text>
            <FlatList data={data} renderItem={renderProduct} />
        </View>
    )
}

export default Products;
