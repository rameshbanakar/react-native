import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native';
function CustomModal() {
  return (
    <View style={styles.container}>
        <View style={styles.modal}>
          <View>
            <Text>some text</Text>
            <Button title='close'/>
          </View>
        </View>
      <View style={styles.openDialog}>
        <Button title="open dialog" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
  openDialog: {
    marginTop: 624,
  },
  modal:{
    backgroundColor:"white",
    height:300,
    width:300,
    justifyContent:"center",
    textAlign:"center",
    marginTop:200,
     margin:"auto",
    padding:10
    
  }
});

export default CustomModal