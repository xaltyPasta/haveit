import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function RoundButtonComp(
  {
  label,
  border=false,
  onPress,
  width='100%',
  marginTop=0,
}) {
  return (
    <TouchableOpacity style={{marginTop:marginTop}}onPress={()=>onPress()}>
        <View style={{
        backgroundColor: border ? 'white' : '#c97c74',
        width:width,
        paddingHorizontal:12,
        paddingVertical:12,
        borderRadius:20,
        marginLeft:10,
        borderColor:'black',
        borderWidth:border?1:0,
        marginTop:20,
        }}>
      <Text style={{
        color:border ? 'black': 'white',
        textAlign:'center',
        fontWeight:'bold',
        }}>{label}</Text>
    </View>
    </TouchableOpacity>
  )
}