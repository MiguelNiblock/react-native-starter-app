import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => { // destructuring, to select the 'navigation' object from default props object
  // console.log(props) // to see the default props provided by react native

  return (
    <View>
      <Text style={styles.text}>Home screen</Text>
      <Button 
        title='Go to Components Demo'
        onPress={()=>navigation.navigate('Components')}
      />
      <Button 
        title='Go to List Demo'
        onPress={()=>navigation.navigate('List')}
      />
      <Button
        title='Go to Image Screen'
        onPress={()=>navigation.navigate('Image')}
      />
      <Button
        title='Go to Counter Screen'
        onPress={()=>navigation.navigate('Counter')}
      />
      <Button
        title='Go to Color Demo'
        onPress={()=>navigation.navigate('Color')}
      />    
      <Button
        title='Go to Square Demo'
        onPress={()=>navigation.navigate('Square')}
      />   
      <Button
        title='Go to Text Demo'
        onPress={()=>navigation.navigate('Text')}
      />
      <Button 
        title='Go to Password Demo'
        onPress={()=>navigation.navigate('Password')} 
      />
      <Button
        title='Go to Box Demo'
        onPress={()=>navigation.navigate('Box')}
      />
      
    </View>)
  
  // can also do it with TouchableOpacity button, which wraps other elements
  // <TouchableOpacity onPress={()=>props.navigation.navigate('List')}>
  //   <Text>Go to List Demo</Text>
  // </TouchableOpacity>


};


const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
