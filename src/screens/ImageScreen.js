import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ImageDetail from '../Components/ImageDetail';

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail title='forest' imageSource={require('../../assets/forest.jpg')} imageScore='99'/>
      <ImageDetail title='mountain'imageSource={require('../../assets/mountain.jpg')} imageScore='97'/>
      <ImageDetail title='beach'imageSource={require('../../assets/beach.jpg')} imageScore='95'/>
    </View>
    
  )
}

const style = StyleSheet.create({});

export default ImageScreen;