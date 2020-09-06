import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.viewStyleOne} />
      <View style={styles.viewStyleTwo} />
      <View style={styles.viewStyleThree} />
    </View>
  )
};

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: 'row', 
    justifyContent: 'space-between' 
  },
  viewStyleOne:{
    height: 100,
    width: 100,
    backgroundColor: 'red',
  },
  viewStyleTwo:{
    height: 100,
    width: 100,
    backgroundColor: 'green',
    top: 100,
  },
  viewStyleThree:{
    height: 100,
    width: 100,
    backgroundColor: 'purple',
  }
});

export default BoxScreen;
