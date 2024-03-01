import { View, Text } from 'react-native'
import React from 'react'
import { useAuthContext } from '../context/AuthContext'
import TabNavigator from './tabNavigation/Navigator'
import Navigator from './stackNavigation/Navigator'
import { DrawerNavigationProp } from '@react-navigation/drawer'
import { RootDrawerParamsList } from './drawerNavigation/DrawerNavigator'
import { useSelector } from 'react-redux'
import { selectAuthState } from '../redux/authSlice'

export default function AuthNavigation() {
    // const {isAuth} =useAuthContext()
    const isAuth = useSelector(selectAuthState);
    console.log('isAuth',isAuth.isAuth)
  return (
     <>
     {isAuth.isAuth?<TabNavigator navigation={undefined as unknown as DrawerNavigationProp<RootDrawerParamsList, "tabNavigator">}/>:<Navigator/>}
     </>
  )
}