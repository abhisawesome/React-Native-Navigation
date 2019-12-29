import React from 'react';
import {View, Text, Button} from 'react-native';
import {DrawerActions} from 'react-navigation-drawer';
export default class One extends React.Component {
  toggleDrawer = () => {
    this.props.navigation.dispatch(DrawerActions.openDrawer());
  };
  render() {
    return (
      <View>
        <Text>ONE</Text>
        <Button
          title="Open Drawer"
          onPress={() => {
            this.toggleDrawer();
          }}
        />
      </View>
    );
  }
}
