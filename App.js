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
    flexWrap: 'wrap', // 是因为换行导致的垂直排列
    flexDirection: 'row', // flexDirection 默认是 column
    backgroundColor: 'black',
  },
  view1: {
    height: 250,
    width: 250,
    backgroundColor: 'red',
  },
  view2: {
    height: 250,
    width: 250,
    backgroundColor: 'green',
  },
});
