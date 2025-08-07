import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import TermImage from './TermImage';
import { useNavigation } from '@react-navigation/native';
import terms from '../data/fullTerms';

const AlphabetSwiper = () => {
  const navigation = useNavigation();

  const [currentIndex, setCurrentIndex] = useState(0);
  const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const currentLetter = alphabets[currentIndex];
  const termsForLetter = terms.filter((term) => term.name[0].toUpperCase() === currentLetter);

  const randomTerm =
    termsForLetter.length > 0
      ? termsForLetter[Math.floor(Math.random() * termsForLetter.length)]
      : null;

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? alphabets.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % alphabets.length);
  };

  const handleTermPress = () => {
    if (randomTerm) {
      navigation.navigate('TermDetailScreen', { term: randomTerm });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.letterText}>Letter: {currentLetter}</Text>

      {randomTerm ? (
        <TouchableOpacity onPress={handleTermPress} style={styles.termBox}>
          {/* ✅ Pass style to TermImage to make sure it's visible */}
          <TermImage imageName={randomTerm.imageName} style={styles.image} />
          <Text style={styles.termName}>{randomTerm.name}</Text>
        </TouchableOpacity>
      ) : (
        <Text style={styles.noTerm}>No term available for {currentLetter}</Text>
      )}

      <View style={styles.navigationButtons}>
        <Button title="◀" onPress={goToPrevious} />
        <Button title="▶" onPress={goToNext} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  letterText: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 20,
    color: '#333',
  },
  termBox: {
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  termName: {
    marginTop: 12,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#444',
    textAlign: 'center',
  },
  image: {
    width: 220,
    height: 220,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  noTerm: {
    fontSize: 18,
    color: 'gray',
    marginVertical: 40,
  },
  navigationButtons: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 30,
  },
});

export default AlphabetSwiper;
