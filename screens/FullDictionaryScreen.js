import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import fullTerms from '../data/fullTerms';
import { useNavigation } from '@react-navigation/native';

const FullDictionaryScreen = () => {
  const navigation = useNavigation();

  const handlePress = (term) => {
    navigation.navigate('TermDetailScreen', { term });
  };

  return (
    <ScrollView style={styles.container}>
      {Object.entries(fullTerms).map(([letter, terms]) => (
        <View key={letter} style={styles.section}>
          <Text style={styles.letter}>{letter.toUpperCase()}</Text>
          {terms && terms.length > 0 ? (
            terms.map((term, index) => (
              <TouchableOpacity
                key={index}
                style={styles.termButton}
                onPress={() => handlePress(term)}
              >
                <Text style={styles.termText}>{term.name}</Text>
              </TouchableOpacity>
            ))
          ) : (
            <Text style={styles.noTerm}>No terms for this letter</Text>
          )}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  section: {
    marginBottom: 20,
  },
  letter: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 5,
  },
  termButton: {
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 5,
    marginBottom: 8,
  },
  termText: {
    fontSize: 16,
  },
  noTerm: {
    fontSize: 14,
    color: 'gray',
    fontStyle: 'italic',
  },
});

export default FullDictionaryScreen;
