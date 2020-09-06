import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const ImageDetail = ({title, imageScore, imageSource}) => {
  // console.log(props)
  return (
    <View>
      <Text>{title}</Text>
      <Text>Image Score: {imageScore}</Text>
      <Image source={imageSource} />
    </View>
  )
};

const style = StyleSheet.create({})

export default ImageDetail;