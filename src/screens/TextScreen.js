import React,{useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const TextScreen = () => {

 const [name, setName] = useState('');

  return(
    <View>
      <Text>Type your name</Text>
      <TextInput 
        style={styles.textInput}
        autoCapitalize='none'
        autoCorrect={false}
        value={name}
        onChangeText={(newValue)=>setName(newValue)}
      />
      <Text>Your name is: {name}</Text>
    </View>
  )
};

const styles =StyleSheet.create({
  textInput: {
    margin: 15,
    lineHeight: 20,
    borderColor: 'black',
    borderWidth: 1
  }
});

export default TextScreen;