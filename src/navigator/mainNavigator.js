import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList65139Navigator from '../features/NotificationList65139/navigator';
import Maps65138Navigator from '../features/Maps65138/navigator';
import UserProfile65115Navigator from '../features/UserProfile65115/navigator';
import Maps65111Navigator from '../features/Maps65111/navigator';
import Add-Item65107Navigator from '../features/Add-Item65107/navigator';
import Maps65106Navigator from '../features/Maps65106/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
NotificationList65139: { screen: NotificationList65139Navigator },
Maps65138: { screen: Maps65138Navigator },
UserProfile65115: { screen: UserProfile65115Navigator },
Maps65111: { screen: Maps65111Navigator },
Add-Item65107: { screen: Add-Item65107Navigator },
Maps65106: { screen: Maps65106Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
