import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';

import Home from '../Home';
import Main from '../MainPage';
import Detail from '../Detail';
const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

const MyDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        drawerLabel: 'Home',
        drawerIcon: ({tintColor}) => (
          <Image
            source={require('./add_button.png')}
            style={[styles.icon, {tintColor: tintColor}]}
          />
        ),
      },
    },
    Main: {
      screen: Main,
      navigationOptions: {
        drawerIcon: ({tintColor}) => (
          <Image
            source={require('./add_button.png')}
            style={[styles.icon, {tintColor: tintColor}]}
          />
        ),
      },
    },
    Deatil: {
      screen: Detail,
      navigationOptions: {
        drawerIcon: ({tintColor}) => (
          <Image
            source={require('./add_button.png')}
            style={[styles.icon, {tintColor: tintColor}]}
          />
        ),
      },
    },
  },
  {
    initialRouteName: 'Home',
  },
);

const MyApp = createAppContainer(MyDrawerNavigator);
export default MyApp;
