import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { HOME } from '../../constants/assessts/AllAssessts'

export default function Input() {
  return (
    <View style={{flexDirection: 'row'}}>
    <TextInput placeholder="pet search" style={styleHome.input} />
    <TouchableOpacity>
      <View style={styleHome.searchB}>
        <HOME.FocusImg />
      </View>
    </TouchableOpacity>
  </View>
  )
}


const styleHome = StyleSheet.create({
    input: {
        marginTop: 60,
        width: 270,
        marginLeft: 32,
        height: 48,
        borderRadius: 20,
        padding: 10,
        backgroundColor: 'white',
        position: 'absolute',
      },
      searchB: {
        position: 'relative',
        width: 80,
        height: 60,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        left: 280,
        top: 52,
      },
})