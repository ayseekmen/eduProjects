
import { SafeAreaView, StyleSheet, Text, View, TextInput, FlatList } from 'react-native';
import dataJson from './patikastore.json';
import Product from './companent';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>PATIKASTORE</Text>

      <TextInput
        style={styles.input}
        placeholder='Ara...'
      />

      <View style={styles.dataContainer}>
        <FlatList
          data={dataJson}
          // columnWrapperStyle={{ justifyContent: 'space-between' }}
          numColumns={2}
          renderItem={({ item }) => <Product product={item} />}
          keyExtractor={data => data.id} />
      </View>

    </SafeAreaView>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    fontSize: 45,
    fontWeight: 'bold',
    marginLeft: 10,
    color: 'purple'
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    backgroundColor: '#ECEFF1',
    borderRadius: 10
  },
  dataContainer: {
    flex: 1
  }
});