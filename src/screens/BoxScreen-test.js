import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle2}>
      <Text style={styles.textStyleOne} >Child 1</Text>
      <Text style={styles.textStyleTwo} >Child 2</Text>
      <Text style={styles.textStyleThree} >Child 3</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    alignItems: 'center', // 'stretch'(default),'flex-start','center','flex-end'
    flexDirection: 'row', // 'column'(default), 'row'
    // alignItems will operate oposite of flexDirection. If 'row', then align works vertically
    height: 200, // allows to see 'alignItems' in action, when flexDirection:'row'.
    justifyContent: 'space-between' //'flex-start'(default),'center','flex-end','space-between','space-around'
    // also works oposite of flexDirection option
  },
  viewStyle2: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
    // flexDirection: 'row'
  },
  textStyle: {
    borderWidth: 3,
    borderColor: 'red',
    // marginVertical: 20,
    // marginHorizontal: 20,
    margin: 20,
    padding: 10
  },
  textStyleOne: {
    borderWidth: 3,
    borderColor: 'red',
    flex: 1, // causes this element to take as much space as possible
    // if applied to several elements, they'll all take as much (equal) space
    // when using larger values, the sum will be the 100%, and each will take their share
    alignSelf: 'flex-end', // overrides the parent' flexDirection
    position: 'relative' // 'relative'(default), 'absolute'. absolute ignores siblings.
    // top: {number} // distance from side. Could be 'top','botton','left','right'
  },
  textStyleTwo: {
    borderWidth: 3,
    borderColor: 'red',
    flex: 2, 
    alignSelf: 'center'
  },
  textStyleThree: {
    borderWidth: 3,
    borderColor: 'red',
    flex: 1,
  },
});

export default BoxScreen;