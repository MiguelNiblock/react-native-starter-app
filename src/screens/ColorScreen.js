import React, {useState} from 'react';
import {View, StyleSheet, Button, FlatList} from 'react-native';

const ColorScreen = () => {

  const [colors, setColors] = useState([]);
  console.log(colors);
  return(
    <View>
      <Button title="Add a color" onPress={()=>{
        setColors([...colors,randomRGB()])
        // at every press, state becomes a new list, which includes the items of previous list + a new random item
      }} />
      
      <FlatList
        data={colors}
        renderItem={({item})=>{
          //item == 'rgb(x,x,x)'
          return <View style={{height: 100, width: 100, backgroundColor: item}} />
        }}
        keyExtractor={(item)=>item} // should be unique. item likely won't repeat because it's random
      />
    </View>
  )
};

const randomRGB = () => {
  const red = Math.floor(Math.random() * 256)
  const green = Math.floor(Math.random() * 256)
  const blue = Math.floor(Math.random() * 256)

  return `rgb(${red}, ${green}, ${blue})`
};

const styles = StyleSheet.create({});

export default ColorScreen;