import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const alphabet = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {alphabet.map((letter) => (
        <TouchableOpacity
          key={letter}
          style={styles.button}
          onPress={() => navigation.navigate('Terms', { letter })}
        >
          <Text style={styles.buttonText}>{letter}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 20,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#3498db',
    padding: 16,
    margin: 8,
    borderRadius: 8,
    width: 60,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default HomeScreen;
