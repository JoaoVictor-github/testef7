// MotoristaScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const MotoristaScreen = () => {
  const [name, setName] = useState('');
  const [destino, setDestino] = useState('');
  const [veiculo, setVeiculo] = useState('');
  const [placa, setPlaca] = useState('');
  const [hora, setHora] = useState('');
  const [zap, setZap] = useState('');
  const [region, setRegion] = useState({
    latitude: -8.052442830407937,
    longitude: -34.88821193857346,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permissão de localização negada');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setRegion({
        ...region,
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    })();
  }, []);

  const handleGetLocation = async () => {
    let location = await Location.getCurrentPositionAsync({});
    setRegion({
      ...region,
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
  };

  const handleRegister = () => {
    // Função para lidar com o envio do formulário
    console.log('Registrado:', {
      name,
      destino,
      veiculo,
      placa,
      hora,
      zap,
      latitude: region.latitude,
      longitude: region.longitude,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Adicionar rota</Text>
      </View>
      <MapView style={styles.map} region={region}>
        <Marker coordinate={{ latitude: region.latitude, longitude: region.longitude }} />
      </MapView>
      <Button title="Obter Localização" onPress={handleGetLocation} />
      <View style={styles.form}>
        <TextInput placeholder="Nome:" value={name} onChangeText={setName} style={styles.input} />
        <TextInput placeholder="Destino:" value={destino} onChangeText={setDestino} style={styles.input} />
        <TextInput placeholder="Veículo:" value={veiculo} onChangeText={setVeiculo} style={styles.input} />
        <TextInput placeholder="Placa:" value={placa} onChangeText={setPlaca} style={styles.input} />
        <TextInput placeholder="Hora:" value={hora} onChangeText={setHora} style={styles.input} />
        <TextInput placeholder="Whatsapp:" value={zap} onChangeText={setZap} style={styles.input} />
        <Button title="Registrar" onPress={handleRegister} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    padding: 20,
    backgroundColor: '#FF9600',
    alignSelf: 'stretch',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  map: {
    width: '100%',
    height: '40%',
  },
  form: {
    padding: 20,
    width: '100%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default MotoristaScreen;
