import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
// import Bean from './soyaböna.jpg'


    



export default function App() {
  return (
    <View style={styles.container}>
      <Text>Bean Boy</Text>
      <StatusBar style="auto" />
      <Image style={styles.Bean} source={require('./soyaböna.jpg')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Bean: {
    width: Dimensions.get('window').width - 100,
    height: Dimensions.get('window').height - 100,
  },
});
