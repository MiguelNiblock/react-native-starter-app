import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {
  // we can pass string variables into JSX
  const greeting = 'Hi there! This is a variable passed to JSX within "{}"';
  // we can assign JSX to variables and pass them in return statement
  const greeting2 = <Text>'This is a JSX element assigned to a variable.'</Text>

  return (
    <View>
      <Text style={styles.textStyle} >This is the ComponentsScreen</Text>
      <Text style={styles.subHeaderStyle}>{greeting}</Text>
      {greeting2}
    </View>
  )
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    subHeaderStyle:{
        fontSize: 20
    }
});

export default ComponentsScreen;