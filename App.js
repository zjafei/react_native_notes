import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  body: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={styles.body}>
        <Text>Hello, world!</Text>
      </View>
    );
  }
}
