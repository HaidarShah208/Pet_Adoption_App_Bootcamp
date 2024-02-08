import { createDrawerNavigator } from '@react-navigation/drawer';
import MyDonation from '../../screens/frontEnd/myDonation/MyDonation';
import Favourite from '../../screens/frontEnd/favourite/Favourite';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../../screens/frontEnd/home/Home';
import SideMenue from './SideMenue';



export type RootDrawerParamsList = {
    home:undefined
    messsage: undefined;
    mydonation: undefined;
  };
const Drawer = createDrawerNavigator<RootDrawerParamsList>();

export default function  DrawerNavigator() {
  return (
    <NavigationContainer>
<Drawer.Navigator initialRouteName="home">
      <Drawer.Screen name="home" component={Home} />
      <Drawer.Screen name="mydonation" component={MyDonation} />
      <Drawer.Screen name="messsage" component={Favourite} />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}