import React from 'react';
import { Image, StyleSheet } from 'react-native';

const imageMap = {
  a1: require('../assets/images/a1.png'),
  b1: require('../assets/images/b1.png'),
//   c1: require('../assets/images/c1.png'),
//   d1: require('../assets/images/d1.png'),
//   e1: require('../assets/images/e1.png'),
//   f1: require('../assets/images/f1.png'),
//   g1: require('../assets/images/g1.png'),
//   h1: require('../assets/images/h1.png'),
//   i1: require('../assets/images/i1.png'),
//   j1: require('../assets/images/j1.png'),
//   k1: require('../assets/images/k1.png'),
//   l1: require('../assets/images/l1.png'),
//   m1: require('../assets/images/m1.png'),
//   n1: require('../assets/images/n1.png'),
//   o1: require('../assets/images/o1.png'),
//   p1: require('../assets/images/p1.png'),
//   q1: require('../assets/images/q1.png'),
//   r1: require('../assets/images/r1.png'),
//   s1: require('../assets/images/s1.png'),
//   t1: require('../assets/images/t1.png'),
//   u1: require('../assets/images/u1.png'),
//   v1: require('../assets/images/v1.png'),
//   w1: require('../assets/images/w1.png'),
//   x1: require('../assets/images/x1.png'),
//   y1: require('../assets/images/y1.png'),
//   z1: require('../assets/images/z1.png'),
  placeholder: require('../assets/images/placeholder.png'),
};

const TermImage = ({ imageName }) => {
  const key = imageName?.split('.')[0]; // 'a1' from 'a1.png'
  const source = imageMap[key] || imageMap['placeholder'];

  return (
    <Image
      source={source}
      style={styles.image}
      resizeMode="contain"
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 16,
  },
});

export default TermImage;
