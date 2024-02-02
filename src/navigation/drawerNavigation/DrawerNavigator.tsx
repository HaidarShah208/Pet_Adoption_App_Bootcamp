import { createDrawerNavigator } from '@react-navigation/drawer';
import MyDonation from '../../screens/frontEnd/myDonation/MyDonation';
import Favourite from '../../screens/frontEnd/favourite/Favourite';
import { NavigationContainer } from '@react-navigation/native';



export type RootDrawerParamsList = {
    messsage: undefined;
    mydonation: undefined;
  };
const Drawer = createDrawerNavigator<RootDrawerParamsList>();

export default function  DrawerNavigator() {
  return (
    <NavigationContainer>

<Drawer.Navigator initialRouteName="mydonation">
      <Drawer.Screen name="mydonation" component={MyDonation} />
      <Drawer.Screen name="messsage" component={Favourite} />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}