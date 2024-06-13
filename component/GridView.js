import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function GridView() {
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
      <Text style={{fontSize: 20, margin: 'auto'}}>
        Grid View in React Native
      </Text>
      <View style={style.grid}>
        {dataList.map(item => (
          <Text style={style.item}>{item.name}</Text>
        ))}
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  item: {
    backgroundColor: 'blue',
    color: 'white',
    width: 120,
    height: 120,
    textAlign: 'center',
    textAlignVertical: 'center',
    margin: 5,
  },
  grid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default GridView;
