import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles'

class ClassCounter extends Component {
    state = {
        count: 0
    }

    inc = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }));
    }

    dec = () => {
        this.setState((prevState) => ({
            count: prevState.count - 1
        }));
    }

    render() {
      return (
        <View style={styles.counter}>
          <TouchableOpacity onPress={this.dec}>
            <Text style={styles.counterTextButton}>-</Text>
          </TouchableOpacity>
  
          <Text style={styles.counterCount}>{this.state.count}</Text>
  
          <TouchableOpacity onPress={this.inc}>
            <Text style={styles.counterTextButton}>+</Text>
          </TouchableOpacity>
        </View>
      );
    }
}

export default ClassCounter;