import React from 'react'
import {View, Text, StyleSheet} from 'react-native';
function ListMapFunc() {
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
      <Text style={{fontSize: 20, color: 'red'}}>
        List from react native using map function
      </Text>
      {dataList.map(item=>(
       
            <Text style={style.items}>{item.name}</Text>
        
      ))}
    </View>
  );
}
const style = StyleSheet.create({
  title: {
    fontSize: 30,
    margin: 'auto',
    color: 'blue',
  },
  items: {
    color: 'white',
    backgroundColor: 'blue',
    fontSize: 20,
    padding: 10,
    margin: 10,
    borderColor: 'black',
    borderWidth: 2,
  },
});
export default ListMapFunc