import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import InputFieldComp from '../../components/InputFieldComp'
import RoundButtonComp from '../../components/roundButton'

export default function SignUpScreen() {
    return (
        <View style={{
            flex: 1,
            backgroundColor: 'white',
            padding: 15,
        }}>
            <StatusBar backgroundColor={'white'} />
            <Text style={{
                textAlign: 'center',
                fontSize: 40,
                color: 'black',
                fontWeight: 'bold',
            }}>Sign Up</Text>
            <Text style={{
                marginTop:200,
                fontSize:28,
                fontStyle:'bold',
                color:'grey',

            }}>Signup here</Text>
            <View style={{
                flex:1,
                justifyContent:'center',
            }}>
                <InputFieldComp 
                placeholder={'Email or Phone'}
                keyboardType={'email-address'}
                />
                <InputFieldComp 
                placeholder={'password'}
                secureTextEntry={true}/>
                <InputFieldComp 
                placeholder={'Re-enter password'}
                secureTextEntry={false}/>
                <RoundButtonComp label={'SignUp'}/>
            </View>
        </View>
    )
}