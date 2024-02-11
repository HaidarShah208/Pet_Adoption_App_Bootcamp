import { createDrawerNavigator } from '@react-navigation/drawer';
import MyDonation from '../../screens/frontEnd/myDonation/MyDonation';
import Favourite from '../../screens/frontEnd/favourite/Favourite';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../../screens/frontEnd/home/Home';
import SideMenue from './SideMenue';
import TabNavigator from '../tabNavigation/Navigator';
import Message from '../../screens/frontEnd/message/Message';
import { drawarSide } from '../../styles/navigation/DrawarSideMenue';

export type RootDrawerParamsList = {
 home:undefined;
    messsage: undefined;
    mydonation: undefined;
  tabNavigator:undefined;
    favroutite:undefined;
 
  };
const Drawer = createDrawerNavigator<RootDrawerParamsList>();

export default function  DrawerNavigator() {
  return ( 
    
<Drawer.Navigator  screenOptions={{headerShown:false,drawerLabelStyle:drawarSide.Items}} drawerContent={(props)=> <SideMenue {...props} />}  >
      <Drawer.Screen name="home"  component={Home} />
      <Drawer.Screen name="messsage" component={Message} />
      <Drawer.Screen name="mydonation" component={MyDonation} />
      <Drawer.Screen name="favroutite" component={Favourite} />

    </Drawer.Navigator>
  );
}