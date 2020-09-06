import React,{useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const TextScreen = () => {

 const [password, setPassword] = useState('');

  return(
    <View>
      <Text>Enter password:</Text>
      <TextInput 
        style={styles.textInput}
        autoCapitalize='none'
        autoCorrect={false}
        value={password}
        onChangeText={(newValue)=>setPassword(newValue)}
      />
    {password.length < 6 ? <Text>Password should be at least 6 characters</Text> : null}
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