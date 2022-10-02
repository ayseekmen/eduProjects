import { Text, View, Image, StyleSheet, Dimensions } from 'react-native';
import dataJson from './patikastore.json';

const Product = ({ product }) => {

    const styles = StyleSheet.create({
        card: {
            width: product.id == dataJson.length - 1 ? '100%' : '50%',
            padding: 10,
        },
        card_inside: {
            backgroundColor: '#ECEFF1',
            borderRadius: 10,
            flex: 1
        },
        image: {
            height: Dimensions.get('window').height / 4,
            backgroundColor: 'white',
            margin: 10,
            borderRadius: 10
        },
        title: {
            fontSize: 15,
            fontWeight: 'bold',
            marginLeft: 10,
            marginRight: 10
        },
        price: {
            marginLeft: 10,
            marginRight: 10,
            marginTop: 10,
            marginBottom: 10,
            color: '#808080'
        },
        stock: {
            color: 'red',
            fontWeight: 'bold',
            marginLeft: 10,
            marginBottom: 10
        }
    })

    return (
        <View style={styles.card}>
            <View style={styles.card_inside}>
                <Image style={styles.image}
                    source={{ uri: product.imgURL }}
                    resizeMode={'contain'}
                />
                <View style={{ justifyContent: 'space-between', flex: 1 }}>
                    <Text style={styles.title}>{product.title}</Text>
                    <View>
                        <Text style={styles.price}>{product.price}</Text>
                        {!product.inStock && (
                            <Text style={styles.stock}>STOKTA YOK</Text>
                        )}
                    </View>
                </View>
            </View>
        </View>
    )
};



export default Product