import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles'

const FuncCounter = () => {

    const [count, setCount] = useState(() => (Math.round(Math.random() * 100)));

    const inc = () => {
        setCount((prevCount) => (prevCount + 1));
    }

    const dec = () => {
        setCount((prevCount) => (prevCount - 1));
    }

    return (
      <View style={styles.counter}>
        <TouchableOpacity onPress={dec}>
          <Text style={styles.counterTextButton}>-</Text>
        </TouchableOpacity>
  
        <Text style={styles.counterCount}>{count}</Text>
  
        <TouchableOpacity onPress={inc}>
          <Text style={styles.counterTextButton}>+</Text>
        </TouchableOpacity>
      </View>
    );
}

export default FuncCounter;