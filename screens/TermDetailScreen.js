import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import TermImage from '../components/TermImage';

const TermDetail = ({ route }) => {
  const { term } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{term.name}</Text>

      <TermImage imageName={term.imageName} />

      <Text style={styles.heading}>Meaning:</Text>
      <Text style={styles.text}>{term.meaning}</Text>

      <Text style={styles.heading}>Application:</Text>
      <Text style={styles.text}>{term.application}</Text>

      <Text style={styles.heading}>Advantages:</Text>
      {Array.isArray(term.advantages) &&
        term.advantages.map((adv, index) => (
          <Text key={index} style={styles.bullet}>• {adv}</Text>
        ))}

      <Text style={styles.heading}>Disadvantages:</Text>
      {Array.isArray(term.disadvantages) &&
        term.disadvantages.map((dis, index) => (
          <Text key={index} style={styles.bullet}>• {dis}</Text>
        ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    marginVertical: 4,
  },
  bullet: {
    fontSize: 16,
    marginLeft: 12,
    marginVertical: 2,
  },
});

export default TermDetail;
