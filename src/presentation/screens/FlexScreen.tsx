import React from 'react';
import {StyleSheet, View} from 'react-native';

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.box1]} />
      <View style={[styles.box, styles.box2]} />
      <View style={[styles.box, styles.box3]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'flex-end',
    backgroundColor: '#d1d1d1',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  box: {
    width: 100,
    height: 100,
  },
  box1: {
    backgroundColor: '#5856D6',
  },
  box2: {
    backgroundColor: '#424099',
  },
  box3: {
    backgroundColor: '#1d1d46',
  },
});
