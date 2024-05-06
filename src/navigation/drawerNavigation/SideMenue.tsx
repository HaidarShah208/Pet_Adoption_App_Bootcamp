import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {HOME, IMAGES} from '../../constants/assets/images';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {drawarSide} from '../../styles/DrawarSideMenue';
import {TextInput} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import  {logout} from '../../store/slice/authSlice';

const SideMenue = (props: any) => {
  const dispatch = useDispatch();
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
