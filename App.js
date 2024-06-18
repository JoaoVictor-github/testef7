import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import MotoristaScreen from './MotoristaScreen';
import AplicativoScreen from './AplicativoScreen';
import OfflineScreen from './OfflineScreen';
import SidePage from './SidePage';
import SobreNosScreen from './SobreNosScreen';
import Header from './Header';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Offline">
        <Stack.Screen name="Offline" component={OfflineScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Motorista" component={MotoristaScreen} />
        <Stack.Screen name="Aplicativo" component={AplicativoScreen} />
        <Stack.Screen name="SidePage" component={SidePage} />
        <Stack.Screen name="SobreNos" component={SobreNosScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
