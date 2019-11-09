import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles'

class ClassCounter extends Component {
    render() {
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
}

export default ClassCounter;