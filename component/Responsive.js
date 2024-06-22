import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Reponsive = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <View style={styles.inner1}></View>
        <View></View>
        <View></View>
      </View>
      <View style={styles.box2}>
        <Text style={styles.text}>Box 2</Text>
      </View>
      <View style={styles.box3}>
        <Text style={styles.text}>Box 3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner1:{
    
  },
  box1: {
    flex:1,
    height: 200,
    backgroundColor: 'red',
    justifyContent: 'center', // center text vertically
    alignItems: 'center', // center text horizontally
  },
  box2: {
    height: 200,
    backgroundColor: 'blue',
    justifyContent: 'center', // center text vertically
    alignItems: 'center', // center text horizontally
  },
  box3: {
    height: 200,
    backgroundColor: 'yellow',
    justifyContent: 'center', // center text vertically
    alignItems: 'center', // center text horizontally
  },
});

export default Reponsive;
