import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {HOME, IMAGES} from '../../constants/assessts/AllAssessts';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {drawarSide} from '../../styles/navigation/DrawarSideMenue';
import Input from '../../components/input/Input';
import {TextInput} from 'react-native-gesture-handler';
import {useAuthContext} from '../../context/AuthContext';
import { useDispatch, useSelector } from 'react-redux';
import authSlice, { logout } from '../../redux/authSlice';

const SideMenue = (props: any) => {
  const dispatch=useDispatch()
  const closeDrawer = () => {
    props.navigation.closeDrawer();
  };

  const handleLogout = () => {
    dispatch(logout());
    closeDrawer();
  };

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View>
          <TouchableOpacity onPress={closeDrawer}>
            <View style={drawarSide.img}>
              <IMAGES.Cross />
            </View>
          </TouchableOpacity>
          <View style={{flexDirection: 'row', marginBottom: 50}}>
            <TextInput placeholder="pet search" style={drawarSide.input} />
            <TouchableOpacity>
              <View style={drawarSide.searchB}>
                <HOME.FocusImg />
              </View>
            </TouchableOpacity>
          </View>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      <TouchableOpacity>
        <Text style={drawarSide.Lgout} onPress={handleLogout}>
          Log out
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SideMenue;
