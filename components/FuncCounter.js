import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles'

const FuncCounter = () => {
    return (
      <View style={styles.counter}>
        <TouchableOpacity>
          <Text style={styles.counterTextButton}>-</Text>
        </TouchableOpacity>
  
        <Text style={styles.counterCount}>0</Text>
  
        <TouchableOpacity>
          <Text style={styles.counterTextButton}>+</Text>
        </TouchableOpacity>
      </View>
    );
}

export default FuncCounter;