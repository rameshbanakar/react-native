

// import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import CompanyData from './component/CompanyData';
import Input from './component/Input';
import ReactForm from './component/ReactForm';

function App(): React.JSX.Element {
  const hello=()=>{
    console.warn("button pressed")
  }
  return (
    <View>
      {/* <CompanyData />
      <Text style={style.someStyle}>hello world</Text>
      <Button title='press here' onPress={hello}></Button>
      <Input /> */}
      <ReactForm/>
    </View>
  );
}
const style=StyleSheet.create({
  someStyle:{
    fontSize:30
  }
})



export default App;
