import React,{useReducer} from 'react';
import {View, Button, StyleSheet, Text} from 'react-native';
import ColorCounter from '../Components/ColorCounter'

const SquareScreen = () => {

  const reducer = (state, action) => {
    switch(action.color){
      case 'red':
        return state.red+action.change>255 || state.red+action.change<0
        ? state
        : {...state, red: state.red + action.change};
      case 'green':
        return state.green+action.change>255 || state.green+action.change<0
        ? state
        : {...state, green: state.green + action.change};
      case 'blue':
        return state.blue+action.change>255 || state.blue+action.change<0
        ? state
        : {...state, blue: state.blue + action.change};
    };
  };
  const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0})

  const INCREMENT = 20;
  const {red, green, blue} = state;
  return (
    <View>
      <ColorCounter
        color='red'
        onIncrease={()=>dispatch({color: 'red', change: INCREMENT})}
        onDecrease={()=>dispatch({color: 'red', change: -1 * INCREMENT})}
      />
      <ColorCounter
        color='green'
        onIncrease={()=>dispatch({color: 'green', change: INCREMENT})}
        onDecrease={()=>dispatch({color: 'green', change: -1 * INCREMENT})}
      />
      <ColorCounter
        color='blue'
        onIncrease={()=>dispatch({color: 'blue', change: INCREMENT})}
        onDecrease={()=>dispatch({color: 'blue', change: -1 * INCREMENT})}
      />
      <View style={{height: 100, width: 100, backgroundColor: `rgb(${red}, ${green}, ${blue})`}} />
    </View>
  )
};

styles = StyleSheet.create({});

export default SquareScreen;