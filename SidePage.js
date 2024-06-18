import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SidePage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          {/* Menu icon (to be implemented if needed) */}
        </View>
        <View style={styles.logo}>
          <Image source={require('./assets/images/120.png')} style={styles.logoImage} />
        </View>
      </View>

      <View style={styles.headerPages}>
        <Text style={styles.pageTitle}>Passageiros</Text>
      </View>

      <View style={styles.content}>
        {/* Content goes here */}
        <Text>Content of your SidePage goes here.</Text>
        {/* Example of list rendering */}
        {/* <FlatList
          data={data}
          renderItem={({ item }) => (
            <Text>{item.name}</Text>
          )}
          keyExtractor={item => item.id.toString()}
        /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF9600',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerLeft: {
    flex: 1,
    alignItems: 'flex-start',
  },
  logo: {
    flex: 1,
    alignItems: 'flex-end',
  },
  logoImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  headerPages: {
    marginBottom: 20,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Additional styles can be added as needed
});

export default SidePage;
