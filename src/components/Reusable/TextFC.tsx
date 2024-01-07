import React, { ReactNode } from 'react'
import { Text } from 'react-native'
import { responsiveFontSize } from 'react-native-responsive-dimensions'

export default function TextFC({children}:{children:ReactNode}) {
  return (
    <Text style={{color:"#ffffff", fontSize:responsiveFontSize(1.6),marginTop:3}}> {children}</Text>
  )
}
