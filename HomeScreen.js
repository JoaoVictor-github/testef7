// HomeScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

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
    fontFamily: '',//'Arial, sans-serif',
  },
  title: {
    color: 'rgb(10, 10, 10)',
    fontSize: 48,
  },
  button: {
    fontSize: 30,
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: 'black',
    borderRadius: 30,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default HomeScreen;
