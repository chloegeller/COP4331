import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container1}>
      <Text style={styles.heading}>UKnight</Text>
      <View style={styles.container2}>
        <Image style={styles.logo} source={require('./assets/knightro_logo.jpg')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#ffc904',
    alignItems: 'center',
    padding: 10,
  },

  container2: {
    backgroundColor: 'black',
    height: 400,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },

  heading: {
    fontSize: 72,
    paddingTop: 48,
    margin: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },

  logo: {
    height: 300,
    width: 250,
  },
});
