import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { Input } from 'react-native-elements'

export default function InputFieldComp({
    placeholder,
    keyboardType='default',
    secureTextEntry=false,
}) {
  return (
    <View style={{
        borderBottomColor:'black',
        borderBottomWidth:1,
    }}>
      <TextInput placeholder={placeholder} 
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}/>
    </View>
  )
}