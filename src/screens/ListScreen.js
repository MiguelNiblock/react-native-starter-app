import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
    const friends = [
        {name: 'Friend1', key:'1'},
        {name: 'Friend2', key:'2'},
        {name: 'Friend3', key:'3'},
        {name: 'Friend4', key:'4'},
        {name: 'Friend5', key:'5'},
        {name: 'Friend6', key:'6'},
        {name: 'Friend7', key:'7'},
        {name: 'Friend8', key:'8'},
        {name: 'Friend9', key:'9'},
        {name: 'Friend10', key:'10'}
    ];

  return (
    <FlatList
      // can add "horizontal" prop, which equals "horizontal=true"
      horizontal={false}
      // schollbar
      // showsHorizontalScrollIndicator={false}
      // can also just add a 'key' property to each friend, without having to use the keyExtractor
      // keyExtractor={(friend) => friend.name} 
      data={friends}
      renderItem={({ item })=>{
      return <Text style={styles.textStyle}>Name: {item.name} - Key: {item.key}</Text>;
      }}    
    />
  );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 10
    }
});

export default ListScreen;