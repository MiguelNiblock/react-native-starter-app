import React,{useReducer} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const CounterScreen = () => {

  const reducer = (state,action) => {
    // action == {type: 'increase' || 'decrease', payload: 1}
    switch(action.type){
      case 'increase':
        return state + action.payload;
      case 'decrease':
        return state - action.payload;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer,0)

  return(
    <View>
      <Button title='Increase' onPress={()=>dispatch({type: 'increase', payload: 1})} />
      <Button title='Decrease' onPress={()=>dispatch({type: 'decrease', payload: 1})} />
      <Text>Current Count: {state}</Text>
    </View>
  )
};

styles = StyleSheet.create({});

export default CounterScreen;