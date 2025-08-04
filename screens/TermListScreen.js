import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { terms } from '../data/terms';

const TermListScreen = ({ route, navigation }) => {
  const { letter } = route.params;

  // Filter terms based on selected letter
  const filteredTerms = terms.filter(term => term.letter === letter);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('Detail', { term: item })}
    >
      <Text style={styles.itemText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredTerms}
        keyExtractor={(item) => item.name}
        renderItem={renderItem}
        ListEmptyComponent={<Text style={styles.empty}>No terms found for "{letter}"</Text>}
        onPress={() => navigation.navigate('TermDetail', { term })}

      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    marginBottom: 10,
    borderRadius: 10,
  },
  itemText: {
    fontSize: 18,
    fontWeight: '500',
  },
  empty: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 16,
    color: 'gray',
  },
});

export default TermListScreen;
