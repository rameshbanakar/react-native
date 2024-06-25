import React from 'react'

import {View,Text} from "react-native"
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack"
const Stack=createNativeStackNavigator()
function StackNav() {
  return (
    <NavigationContainer>
     <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}/>
     </Stack.Navigator>
    </NavigationContainer>
  )
}
const Home=()=>{
    return(
        <View>
            <Text>hello world from Home</Text>
        </View>
    )
}

const Profile = () => {
  return (
    <View>
      <Text>hello world</Text>
    </View>
  );
};

export default StackNav