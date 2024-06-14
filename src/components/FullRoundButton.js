import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function FullRoundButtonComp({ image, bg }) {
    return (
        <TouchableOpacity >
            <View style={{
            backgroundColor: bg,
            width: 70,
            height: 25,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50,
        }} >
            <Image source={image}
                style={{
                    width: 45,
                    height: 50,
                }} />
        </View>
        </TouchableOpacity>
    )
}