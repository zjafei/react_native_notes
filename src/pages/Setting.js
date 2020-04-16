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
        <Text>设置页面: {params ? params.text : 'nothing'}</Text>
        <Button
          title="跳转到首页"
          onPress={() => {
            navigation.navigate('PageTab', { screen: 'Home' });
          }}
        />
      </View>
    );
  }
}
