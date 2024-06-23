import React from 'react'
import {View, Text, Platform} from 'react-native';
function OsCheck() {
  return (
    <View>
      <Text>platform:{Platform.OS}</Text>
    </View>
  );
}

export default OsCheck