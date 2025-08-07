import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Easing } from 'react-native';
import TermImage from '../components/TermImage';
import fullTerms from '../data/fullTerms';
import { useNavigation } from '@react-navigation/native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

const getRandomTermsMap = () => {
  const map = {};
  alphabet.forEach(letter => {
    const terms = fullTerms[letter];
    if (terms && terms.length > 0) {
      const randomIndex = Math.floor(Math.random() * terms.length);
      map[letter] = terms[randomIndex];
    } else {
      map[letter] = null;
    }
  });
  return map;
};

const HomeScreen = () => {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [randomTermsMap, setRandomTermsMap] = useState({});
  const fadeAnim = useState(new Animated.Value(1))[0]; // For fade transition

  useEffect(() => {
    const map = getRandomTermsMap();
    setRandomTermsMap(map);
  }, []);

  const currentLetter = alphabet[currentIndex];
  const term = randomTermsMap[currentLetter];

  const triggerTransition = (direction) => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 200,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
    ]).start(() => {
      setCurrentIndex(prev =>
        direction === 'left'
          ? (prev === 0 ? alphabet.length - 1 : prev - 1)
          : (prev === alphabet.length - 1 ? 0 : prev + 1)
      );
    });
  };

  const goToFullDictionary = () => {
    navigation.navigate('FullDictionaryScreen');
  };

  const handlePress = () => {
    if (term) {
      navigation.navigate('TermDetailScreen', { term });
    }
  };

  const onGestureEnd = ({ nativeEvent }) => {
    if (nativeEvent.state === State.END) {
      if (nativeEvent.translationX > 100) {
        triggerTransition('left');
      } else if (nativeEvent.translationX < -100) {
        triggerTransition('right');
      }
    }
  };

  return (
    <PanGestureHandler onHandlerStateChange={onGestureEnd}>
      <View style={styles.container}>
        {/* Top-left book icon */}
        <TouchableOpacity onPress={goToFullDictionary} style={styles.topLeftTab}>
          <Ionicons name="book-outline" size={26} color="#333" />
        </TouchableOpacity>

        <Animated.View style={[styles.termContainer, { opacity: fadeAnim }]}>
          <Text style={styles.letterText}>{currentLetter.toUpperCase()}</Text>

          {term ? (
            <>
              <TouchableOpacity onPress={handlePress} style={styles.imageCard}>
                <TermImage imageName={term.imageName} style={styles.image} />
              </TouchableOpacity>
              <TouchableOpacity onPress={handlePress}>
                <Text style={styles.termName}>{term.name.toUpperCase()}</Text>
              </TouchableOpacity>
            </>
          ) : (
            <Text style={styles.noTerm}>
              No term available for {currentLetter.toUpperCase()}
            </Text>
          )}
        </Animated.View>
      </View>
    </PanGestureHandler>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  topLeftTab: {
    position: 'absolute',
    top: 40,
    left: 16,
    zIndex: 1,
    backgroundColor: 'transparent',
    padding: 8,
  },
  termContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 60,
  },
  letterText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 20,
  },
  termName: {
    fontSize: 32,
    fontWeight: '800',
    color: '#1a1a1a',
    marginTop: 25,
    textAlign: 'center',
  },
  imageCard: {
    width: 300,
    height: 220,
    borderWidth: 3,
    borderColor: '#000',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  noTerm: {
    fontSize: 18,
    color: 'gray',
    marginTop: 20,
    textAlign: 'center',
  },
});

export default HomeScreen;
