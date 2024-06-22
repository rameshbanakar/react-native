import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
function RadioButton() {
    const [selectedRadio,setSelectedRadio]=useState(1)
    
  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={() => setSelectedRadio(1)}>
        <View style={styles.radioAndText}>
          <View style={styles.radio}>
            {selectedRadio === 1 ? <View style={styles.Select}></View> : null}
          </View>
          <Text style={styles.radioText}>Radio 1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSelectedRadio(2)}>
        <View style={styles.radioAndText}>
          <View style={styles.radio}>
            {selectedRadio === 2 ? <View style={styles.Select}></View> : null}
          </View>
          <Text style={styles.radioText}>Radio 2</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    margin: 'auto',
  },
  radioText: {
    fontSize: 30,
  },
  radioAndText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radio: {
    height: 30,
    width: 30,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 15,
    marginRight: 10,
  },
  Select: {
    height: 20,
    width: 20,
    borderWidth: 1,
    borderRadius: 15,
    margin:"auto",
    backgroundColor:"blue"
  },
});

export default RadioButton