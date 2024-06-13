import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
function ReactNativeList() {
  const dataList = [
    {
      id: 1,
      name: 'Ramesh Banakar',
    },
    {
      id: 2,
      name: 'veeresh Banakar',
    },
    {
      id: 3,
      name: 'sahana Banakar',
    },
    {
      id: 4,
      name: 'Bharat Banakar',
    },
  ];
  return (
    <View>
      <Text style={style.title}>React Native List</Text>
      <FlatList
        data={dataList}
        renderItem={({item}) => <Text style={style.items}>{item.name}</Text>}
        keyExtractor={(item)=>item.id}
      />
    </View>
  );
}
const style = StyleSheet.create({
  title: {
    fontSize: 30,
    margin: 'auto',
    color: 'blue',
  },
  items:{
    color:"white",
    backgroundColor:"blue",
    fontSize:20,
    padding:10,
    margin:10,
    borderColor:"black",
    borderWidth:2,
    
  }
});

export default ReactNativeList;
