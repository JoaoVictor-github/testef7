// AplicativoScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AplicativoScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>O Aplicativo</Text>
      <Text style={styles.paragraph}>
        O Aplicativo de Caronas para o Trabalho (RideShare) é uma ferramenta prática e inovadora destinada a transformar a maneira como os colaboradores se deslocam até seus locais de trabalho. Com a utilização deste aplicativo, os usuários podem encontrar colegas que façam rotas similares e assim, compartilhar viagens de carro, o que não apenas economiza em custos de transporte, como também contribui para a redução da emissão de poluentes e congestionamentos nas estradas.
      </Text>
      <Text style={styles.paragraph}>
        O principal objetivo do Aplicativo de Caronas para o Trabalho (RideShare) é reduzir o número de veículos nas estradas ao promover o compartilhamento de caronas entre colaboradores que têm rotas semelhantes para o trabalho. Essa redução de veículos não só diminui os congestionamentos e a poluição ambiental, como também ajuda a baixar significativamente os custos de transporte para os indivíduos envolvidos.
      </Text>
      <Text style={styles.paragraph}>
        Além desses benefícios mais tangíveis, o aplicativo também busca promover uma maior integração e interação entre os colaboradores. Ao compartilhar caronas, os funcionários têm a oportunidade de estreitar relacionamentos, o que pode melhorar a comunicação e o clima organizacional. Essa interação mais próxima entre colegas de trabalho pode contribuir para um ambiente mais colaborativo e amigável, reforçando laços e facilitando o trabalho em equipe.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paragraph: {
    marginBottom: 20,
    lineHeight: 22,
  },
});

export default AplicativoScreen;
