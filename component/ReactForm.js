import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import style from './ReactFormStyle';
function ReactForm() {
  const [data, setData] = useState({email: '', password: ''});
  const [display, setDisplay] = useState(false);
  const onTextChange = (name, text) => {
    setData({...data, [data[name]]: text});
  };

  const dispalyData = () => {
    if (display) {
      setDisplay(false);
    } else {
      setDisplay(true);
    }
  };
  return (
    <View>
      <Text style={style.formText}>React-Native form</Text>
      <TextInput
        placeholder="Enter E-mail id:"
        style={style.emialInput}
        onChangeText={text => onTextChange('email', text)}></TextInput>
      <TextInput
        placeholder="Enter password:"
        style={style.emialInput}
        secureTextEntry={true}
        onChangeText={text => onTextChange('password', text)}></TextInput>
      <View style={style.submitButton}>
        <Button title="Submit" onPress={dispalyData} color="red"></Button>
      </View>
      <View style={style.submitButton}>
        <Button title="Clear" color="blue"></Button>
      </View>
      <View>
        {display ? (
          <View>
            <Text>Your Email id is :{data.email}</Text>
            <Text>Your password:</Text>
          </View>
        ) : null}
      </View>
    </View>
  );
}

export default ReactForm;
