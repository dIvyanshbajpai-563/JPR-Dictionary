import React from 'react';
import { Image, StyleSheet } from 'react-native';
import imageMap from './imageMap';

const TermImage = ({ imageName, style }) => {
  const imageSource = imageMap[imageName];

  if (!imageSource) {
    return (
      <Image
        source={require('../assets/images/placeholder.png')}
        style={[styles.image, style]}
        resizeMode="contain"
      />
    );
  }

  return (
    <Image
      source={imageSource}
      style={[styles.image, style]}
      resizeMode="contain"
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
});

export default TermImage;
