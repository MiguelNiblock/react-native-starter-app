import React, {useState} from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';

const CounterScreen = () => {
// don't use state directly:
// let counter = 0;

// use useState instead!
const [counter, setCounter] = useState(0);

// and don't modify state directly, use setCounter
// counter++;

  return (
    <View>
      <Button onPress={()=>{
        setCounter(counter+1); // update state
      }} title="increase" />
      <Button onPress={()=>{
        setCounter(counter-1); //update state
      }}title="decrease" />
      <Text>Current count: {counter}</Text>
    </View>)
}

const styles = StyleSheet.create({});

export default CounterScreen;