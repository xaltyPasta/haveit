import { View, Text, Image, StatusBar } from 'react-native'
import React from 'react'
import RoundButtonComp from '../../components/roundButton'
import FullRoundButtonComp from '../../components/FullRoundButton'

export default function SignIn({navigation}) {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={'#fffdee'} />
      <View style={{ flex: 0.5 }}>
        <Image resizeMode={'cover'}
          source={
            require('../../assests/signin.png')}
          style={{
            height: '200%',
            width: '100%',
          }} />
      </View>
      <View style={{ flex: 0.8, backgroundColor: '#f9d2b5' }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 40,
            color: 'black',
            fontWeight: 'bold',
          }}>
          Hello there!
        </Text>
        <Text style={{
          textAlign: 'center',
          fontSize: 22,
          marginTop: 20,
        }}>Welcome to our Online Store</Text>
        <View style={{
          flexDirection: 'row',
          marginTop: 40,
          justifyContent: 'center',
          

        }}>
          <RoundButtonComp label={'Sign In'} width={130}/>
          <RoundButtonComp label={'Sign Up'} width={130} 
          border={true} onPress={
            ()=>navigation.navigate('SignUpScreen')
            }/>
        </View>
        <View
          style={{
            flex: 1,
            marginTop: 20,
            paddingBottom: 20,
            justifyContent: 'flex-end',
          }}>
          <Text
            style={{
              textAlign: 'center',
              marginTop: 100,
              fontSize: 20,

            }}>or via social media account </Text>

          <View style={{
            flexDirection: 'row',
            marginTop: 40,
            justifyContent: 'center',
            alignItems: 'flex-end',
            paddingBottom: 10,
            flex: 1,
          }}>
            <FullRoundButtonComp image={
              require('../../assests/fb.png')} />
            <FullRoundButtonComp image={
              require('../../assests/goog.png')} />
          </View>
        </View>
      </View>
    </View>
  )
}