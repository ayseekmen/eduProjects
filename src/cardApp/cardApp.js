import React from 'react';
import { SafeAreaView, StyleSheet, } from 'react-native';
import Card from './components/Card';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Card title="Ayşe EKMEN" text="Selam ver" />
      <Card
        title="Falat Hüseyin EKMEN"
        text="Selam ver" />
      <Card
        title="Özge GÜÇLÜ"
        text="Selam ver" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
});

export default App;