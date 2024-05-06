import {createDrawerNavigator} from '@react-navigation/drawer';
import Favourite from '../../screens/favourite/Favourite';
import SideMenue from './SideMenue';
import {drawarSide} from '../../styles/DrawarSideMenue';
import DetailNavigation, {AddPet} from '../detailNavigation/DetailNavigation';
import {HomeDetailsNavigations} from '../tabNavigation/DetailsNavigation';
import DonationRequests from '../../screens/donationRequests/DonationRequests';

export type RootDrawerParamsList = {
  Home: undefined;
  Messsage: undefined;
  MyDonations: undefined;
  tabNavigator: undefined;
  Favourite: undefined;
  donateScren: undefined;
  AddPet: undefined;
  Request: undefined;
};
const Drawer = createDrawerNavigator<RootDrawerParamsList>();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false, drawerLabelStyle: drawarSide.Items}}
      drawerContent={props => <SideMenue {...props} />}>
      <Drawer.Screen name="Home" component={HomeDetailsNavigations} />
      <Drawer.Screen name="MyDonations" component={DetailNavigation} />
      <Drawer.Screen name="Favourite" component={Favourite} />
      <Drawer.Screen name="AddPet" component={AddPet} />
      <Drawer.Screen name="Request" component={DonationRequests} />
    </Drawer.Navigator>
  );
}
