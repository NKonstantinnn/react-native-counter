import React from 'react';
import {View, StyleSheet} from 'react-native';

import ClassCounter from './components/ClassCounter';
import FuncCounter from './components/FuncCounter';

function App() {
  return (
    <View style={styles.container}>
      <ClassCounter />
      <FuncCounter /> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
  }
});

export default App;
