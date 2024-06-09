import React, { useState } from 'react'
import {Text, TextInput, View, StyleSheet, Button } from "react-native"
function Input() {
    const [name, setName] = useState("")

    return (
        <View>
            <Text>{name}</Text>
            <TextInput placeholder='Enter Your Name:' style={style.textInput} onChangeText={(text) => setName(text)} value={name}/>
                <Button title='clear' onPress={()=>setName("")}></Button>
        </View>
    )
}
const style = StyleSheet.create({
    textInput: {
       
        paddingLeft:10,
        fontSize: 18,
        borderColor: 'red',
        borderWidth: 2,
        margin: 5,
        borderRadius:10
       
    }
})
export default Input