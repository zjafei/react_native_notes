import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class FlexBox extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.view1} />
        <View style={styles.view2} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',// flexDirection 默认是 column
    backgroundColor: 'black',
  },
  view1: {
    height: 150,
    width: 150,
    backgroundColor: 'red',
  },
  view2: {
    height: 150,
    width: 150,
    backgroundColor: 'green',
  },
});
