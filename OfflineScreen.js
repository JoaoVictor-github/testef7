// OfflineScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const OfflineScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>RIDESHARE</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Motorista')}
      >
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF9600',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#0a0a0a',
    fontSize: 48,
    marginBottom: 20,
    fontFamily: '',//'Arial, sans-serif',
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
    textDecorationLine: 'none',
  },
});

export default OfflineScreen;
