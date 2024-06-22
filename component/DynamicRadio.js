import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
function DynamicRadio() {
  const skills = [
    {id: 1, name: 'Python'},
    {id: 2, name: 'Javascript'},
    {id: 3, name: 'Node'},
    {id: 4, name: 'Java'},
  ];
  const [selectedRadio, setSelectedRadio] = useState("Python");
  return (
    <View style={styles.main}>
      {skills.map((item) => (
        <TouchableOpacity onPress={() => setSelectedRadio(item.name)} key={item.id}>
          <View style={styles.radioAndText}>
            <View style={styles.radio}>
              {selectedRadio === item.name ? <View style={styles.Select}></View> : null}
            </View>
            <Text style={styles.radioText}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
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
    margin: 'auto',
    backgroundColor: 'blue',
  },
});

export default DynamicRadio;
