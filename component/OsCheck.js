import React from 'react'
import {View, Text, Platform} from 'react-native';
function OsCheck() {
  return (
    <View>
      <Text style={{fontSize:20,color:"red",margin:"auto"}}>platform:{Platform.OS}</Text>
    </View>
  );
}

export default OsCheck