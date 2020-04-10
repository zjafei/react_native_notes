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
    // flexWrap: 'wrap', // 是因为换行导致的垂直排列 (又这个样式就不能垂直居中了)
    flexDirection: 'row', // flexDirection 默认是 column
    backgroundColor: 'black',
    justifyContent: 'center', // 内容水平居中
    alignItems: 'center', // 内容垂直居中
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
