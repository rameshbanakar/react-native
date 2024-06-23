import React, {useState} from 'react';
import {View, Text, StyleSheet, Modal, Button} from 'react-native';
import StyleButton from './StyleButton';
function Modals() {
    const [showModal,setShowModal]=useState(false)
  return (
    <View>
      <Modal transparent={true} visible={showModal} animationType="slide">
        <View style={styles.centredView}>
          <View style={styles.modelView}>
            <Text style={styles.textStyle}>Hello from Ramesh</Text>
            <Button
              title="Close Modal"
              onPress={() => setShowModal(false)}></Button>
          </View>
        </View>
      </Modal>
      <View style={styles.modelButton}>
        <Button title="Open Modal" onPress={() => setShowModal(true)}></Button>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  modelButton: {
    marginTop: 724,
  },
  centredView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modelView: {
    backgroundColor: 'white',
    padding: 80,
    borderRadius: 20,
    shadowColor: 'black',
    opacity: 1,
    elevation: 30,
  },
  textStyle:{
    fontSize:20,
    color:"blue",
    marginBottom:20
  }
});
export default Modals