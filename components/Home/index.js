import React from 'react';
import {View, Button, Text, Image} from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Button
          title="Go to home"
          onPress={() => {
            this.props.navigation.navigate('Main');
          }}
        />
        <Button
          title="Drawer"
          onPress={() => {
            this.props.navigation.openDrawer();
          }}
        />
      </View>
    );
  }
}
