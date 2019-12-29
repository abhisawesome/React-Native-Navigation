import React from 'react';
import {View, Text, Button} from 'react-native';
export default class Two extends React.Component {
  render() {
    return (
      <View>
        <Text>Two</Text>
        <Button
          title="Open Drawer"
          onPress={() => {
            this.props.navigation.openDrawer();
          }}
        />
      </View>
    );
  }
}
