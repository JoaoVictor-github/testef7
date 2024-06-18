// SobreNosScreen.js

import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';

const SobreNosScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => toggleMenu()}>
          <Text style={styles.menuIcon}>&#9776;</Text>
        </TouchableOpacity>
        <View style={styles.menuDropdown}>
          <TouchableOpacity onPress={() => navigation.navigate('SobreNos')}>
            <Text style={styles.menuItem}>Sobre Nós</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('OAplicativo')}>
            <Text style={styles.menuItem}>O Aplicativo</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Index')}>
            <Text style={styles.menuItem}>Sair</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Motorista')}>
          <Image source={require('./assets/images/120.png')} style={styles.logo} />
        </TouchableOpacity>
      </View>

      <View style={styles.mainWrapper}>
        <View style={styles.article}>
          <Text style={styles.articleHeader}>Quem Somos?</Text>
          <Text style={styles.articleText}>
            Nós somos estudantes do terceiro período do curso de Análise e Desenvolvimento de Sistemas do SENAC Pernambuco,
            envolvidos no projeto Embarque Digital. Nossa paixão por tecnologia e desenvolvimento nos uniu em um objetivo comum:
            criar soluções práticas e eficazes que atendam às necessidades do dia a dia das pessoas.
            {'\n\n'}
            Este é um projeto para a disciplina de Desenvolvimento Mobile. O foco do nosso projeto é desenvolver um Progressive Web App (PWA)
            que facilitará o compartilhamento de caronas entre os colaboradores de uma empresa. A ideia surgiu da necessidade de oferecer uma
            alternativa sustentável e econômica para o transporte diário, promovendo ao mesmo tempo a interação e a colaboração entre colegas de trabalho.
            {'\n\n'}
            O conceito do nosso PWA é simples mas impactante: permitir que os funcionários de uma empresa possam organizar e participar de caronas de
            maneira fácil e segura, utilizando apenas seus dispositivos móveis. Através do aplicativo, os usuários poderão oferecer vagas em seus veículos
            ou encontrar um lugar em caronas programadas, otimizando trajetos e contribuindo para a redução de carros nas estradas.
          </Text>
          
          <Text style={styles.articleHeader}>Integrantes</Text>
          <Text style={styles.articleText}>
            Adonis Vinicius {'\n'}
            Alan Vitor {'\n'}
            Cícero Antônio {'\n'}
            Esmeralda Freire {'\n'}
            João Victor Santos {'\n'}
            Luis Vinicius {'\n'}
            Mateus Caik
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF9600',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  menuIcon: {
    fontSize: 20,
  },
  menuDropdown: {
    position: 'absolute',
    top: 40,
    right: 20,
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 5,
    zIndex: 1,
  },
  menuItem: {
    fontSize: 16,
    marginVertical: 5,
  },
  logo: {
    width: 50,
    height: 50,
  },
  mainWrapper: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  article: {
    marginBottom: 20,
  },
  articleHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  articleText: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default SobreNosScreen;
