import React from 'react'
import {View, Text, StyleSheet, FlatList,TouchableHighlight} from 'react-native';
function StyleButton() {
  return (
    <View>
      <TouchableHighlight>
        <Text style={[styles.button, styles.sucess]}>Success</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button, styles.warning]}>Warning</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button, styles.danger]}>Danger</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={styles.button}>Button</Text>
      </TouchableHighlight>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  button: {
    fontSize: 20,
    backgroundColor: 'blue',
    color: 'white',
    textAlign: 'center',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    shadowColor: 'black',
    elevation: 10,
  },
  sucess: {
    backgroundColor: 'green',
  },
  warning: {
    backgroundColor: 'orange',
  },
  danger:{
    backgroundColor:"red"
  }
});

export default StyleButton