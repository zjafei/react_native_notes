import React, { Component } from 'react';
import { Text, Button, StatusBar } from 'react-native';

export default class page extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <>
        <StatusBar backgroundColor="black" />
        <Text>detail</Text>
        {/* navigate 不能跳转 因为已经在详情页面了  */}
        <Button title="Go to Details with navigate" onPress={() => navigation.navigate('Detail')} />
        {/* push 能跳转 因为可以不停的堆栈  */}
        <Button title="Go to Details with push" onPress={() => navigation.push('Detail')} />
      </>
    );
  }
}

// const styles = StyleSheet.create({});
