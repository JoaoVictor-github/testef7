import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const navigation = useNavigation();

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
    setMenuVisible(false); // Fecha o menu após navegar para outra tela
  };

  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <TouchableOpacity onPress={toggleMenu}>
          <Text style={styles.menuIcon}>&#9776;</Text>
        </TouchableOpacity>
        {menuVisible && (
          <View style={styles.menuDropdown}>
            <TouchableOpacity onPress={() => navigateToScreen('SobreNos')}>
              <Text style={styles.menuItem}>Sobre Nós</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigateToScreen('Aplicativo')}>
              <Text style={styles.menuItem}>O Aplicativo</Text>
            </TouchableOpacity>
            {/* Exemplo de sair da aplicação (voltar para a tela inicial) */}
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Text style={styles.menuItem}>Sair</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      <View style={styles.logo}>
        <TouchableOpacity onPress={() => navigation.navigate('Motorista')}>
          <Image source={require('./assets/images/120.png')} style={styles.logoImage} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#FFFFFF', // Cor de fundo do cabeçalho
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    fontSize: 24,
    marginRight: 10,
  },
  menuDropdown: {
    position: 'absolute',
    top: 40, // Posição do dropdown em relação ao topo do header
    right: 10, // Posição do dropdown em relação à direita do header
    backgroundColor: '#FFFFFF', // Cor de fundo do dropdown
    borderWidth: 1,
    borderColor: '#CCCCCC',
    padding: 10,
    zIndex: 1000, // Para garantir que o dropdown esteja acima de outros elementos
  },
  menuItem: {
    fontSize: 16,
    paddingVertical: 5,
  },
  logo: {
    marginLeft: 20,
  },
  logoImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});

export default Header;
