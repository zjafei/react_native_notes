import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class page extends Component {
  render() {
    const {
      navigation,
      route: { params },
    } = this.props;
    return (
      <View>
        <Text>Setting: {params ? params.text : 'nothing'}</Text>
        <Button
          title="go to home"
          onPress={() => {
            navigation.navigate('PageTab', { screen: 'Home' });
          }}
        />
      </View>
    );
  }
}
