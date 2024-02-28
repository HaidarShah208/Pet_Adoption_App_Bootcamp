import { View, Text } from 'react-native'
import React from 'react'
import { useAuthContext } from '../context/AuthContext'
import TabNavigator from './tabNavigation/Navigator'
import Navigator from './stackNavigation/Navigator'
import { DrawerNavigationProp } from '@react-navigation/drawer'
import { RootDrawerParamsList } from './drawerNavigation/DrawerNavigator'

export default function AuthNavigation() {
    const {isAuth} =useAuthContext()
    console.log('isAuth',isAuth)
  return (
     <>
     {isAuth?<TabNavigator navigation={undefined as unknown as DrawerNavigationProp<RootDrawerParamsList, "tabNavigator">}/>:<Navigator/>}
     </>
  )
}