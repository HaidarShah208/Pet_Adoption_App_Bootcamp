import { createDrawerNavigator } from '@react-navigation/drawer';
import Favourite from '../../screens/frontEnd/favourite/Favourite';
import SideMenue from './SideMenue';
import Message from '../../screens/frontEnd/message/Message';
import { drawarSide } from '../../styles/navigation/DrawarSideMenue';
import DetailNavigation, { AddPet } from '../detailNavigation/DetailNavigation';
import { HomeDetailsNavigations } from '../tabNavigation/DetailsNavigation';

export type RootDrawerParamsList = {
 home:undefined;
    Messsage: undefined;
    MyDonations: undefined;
  tabNavigator:undefined;
    favroutite:undefined;
    donateScren:undefined;
    Add_Pet:undefined
 
  };
const Drawer = createDrawerNavigator<RootDrawerParamsList>();

export default function  DrawerNavigator() {
  return ( 
    
<Drawer.Navigator  screenOptions={{headerShown:false,drawerLabelStyle:drawarSide.Items}} drawerContent={(props)=> <SideMenue {...props} />}  >
      <Drawer.Screen name="home"  component={HomeDetailsNavigations} />
      <Drawer.Screen name="Messsage" component={Message} />
      <Drawer.Screen name="MyDonations" component={DetailNavigation} />
      <Drawer.Screen name="favroutite" component={Favourite} />
      <Drawer.Screen name="Add_Pet" component={AddPet} />
    </Drawer.Navigator>
  );
}