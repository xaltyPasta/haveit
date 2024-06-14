import { View, Text,ImageBackground } from 'react-native'
import React from 'react'

export default function SplashScreen({navigation}) {
  
  setTimeout(()=>{
    navigation.navigate('SignIn')
  },2000)
  
  return (
    <ImageBackground source={
      require('../../assests/splash.png')}
    resizeMode={'cover'}
    style={{flex:1,padding:15}}>
      <Text
      style={{
        fontSize:55,
        color:'#e28657',
        fontWeight:'bold',
        textAlign:'center',
      }}>
        Havit
      </Text>
      <Text
      style={{
        fontSize:25,
        color:'#6c4b40',
        fontWeight:'bold',
        textAlign:'center',
      }}>
        Personalised Online Store
      </Text>
    </ImageBackground>
  )
}