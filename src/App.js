import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class FlexBox extends Component {
  render() {
    return (
      <>
        <View style={styles.search}>
          <TextInput style={styles.input} placeholder="搜索商品" />
          <Button style={styles.button} title="搜索" />
        </View>
        <View style={styles.advertisement}>
          <Text>轮播广告</Text>
        </View>
        <View style={styles.products}>
          <Text>商品列表</Text>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  // ctrl + m 打开调试菜单
  //   container: {
  //     flex: 1,
  //     // flexWrap: 'wrap', // 是因为换行导致的垂直排列 (又这个样式就不能垂直居中了)
  //     // flexDirection: 'row', // flexDirection 默认是 column
  //     backgroundColor: 'gray',
  //     // justifyContent: 'center', // 内容水平居中
  //     // alignItems: 'center', // 内容垂直居中
  //   },
  search: {
    marginTop: Platform.OS === 'android' ? 0 : 20, // Platform 平台的信息
    height: 40,
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    borderWidth: 2,
  },
  button: {
    flex: 1,
  },
  advertisement: {
    height: 180,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  products: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
