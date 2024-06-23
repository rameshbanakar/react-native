import React from 'react'
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
function Loader() {
  return (
    <View>
     <ActivityIndicator size={100} color="blue"/>
    </View>
  );
}

const styles = StyleSheet.create({
    loaderText:{
        fontSize:30,
        margin:"auto",
        color:"blue"
    }
})

export default Loader