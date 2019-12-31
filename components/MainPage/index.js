import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import OneScreen from './One';
import TwoScreen from './Two';
const RootStack = createMaterialTopTabNavigator(
  {
    One: OneScreen,
    Two: TwoScreen,
  },
  {
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    tabBarPosition: 'bottom',
  },
);

export default createAppContainer(RootStack);
