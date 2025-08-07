import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import TermImage from '../components/TermImage';

const TermDetailScreen = ({ route }) => {
  const { term } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.name}>{term.name}</Text>
      <TermImage imageName={term.imageName} style={styles.image} />

      <Text style={styles.sectionTitle}>Meaning</Text>
      <Text style={styles.text}>{term.meaning}</Text>

      <Text style={styles.sectionTitle}>Application</Text>
      <Text style={styles.text}>{term.application}</Text>

      <Text style={styles.sectionTitle}>Advantages</Text>
      <Text style={styles.text}>{term.advantages}</Text>

      <Text style={styles.sectionTitle}>Disadvantages</Text>
      <Text style={styles.text}>{term.disadvantages}</Text>
    </ScrollView>
  );
};

export default TermDetailScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 16,
    marginBottom: 6,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
});
