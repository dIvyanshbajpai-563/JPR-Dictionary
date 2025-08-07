import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import TermImage from '../components/TermImage';
import fullTerms from '../data/fullTerms';

const TermListScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { letter } = route.params;

  const terms = fullTerms[letter.toLowerCase()] || [];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.termItem}
      onPress={() => navigation.navigate('TermDetailScreen', { term: item })}
    >
      <TermImage imageName={item.imageName} style={styles.image} />
      <Text style={styles.termName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Terms for "{letter}"</Text>
      <FlatList
        data={terms}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${letter}-${index}`}
      />
    </View>
  );
};

export default TermListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  termItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 12,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  termName: {
    fontSize: 18,
    fontWeight: '500',
  },
});
