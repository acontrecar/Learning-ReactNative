import React from 'react';
import {StyleSheet, View} from 'react-native';

export const FileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
  box1: {
    backgroundColor: '#5856D6',
    flex: 1,
  },
  box2: {
    backgroundColor: '#424099',
    flex: 2,
  },
  box3: {
    backgroundColor: '#1d1d46',
    flex: 3,
  },
});
