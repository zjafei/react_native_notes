import React, { Component } from 'react';
import { ScrollView, Image, View, Text, Button, StatusBar, Dimensions, StyleSheet } from 'react-native';

export default class page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counting: 0,
    };
  }
  render() {
    const {
      navigation,
      route: { params },
    } = this.props;
    return (
      <ScrollView>
        <StatusBar backgroundColor="#2296F3" />
        <Image source={params.uri} style={styles.productImage} />
        <View>
          <Text style={styles.productTitle}>名称: {params.title}</Text>
        </View>
        <View>
          <Text style={styles.productSubTitle}>描述: {params.subTitle}</Text>
        </View>
        <View>
          <Text style={styles.productSubTitle}>访问次数: {params.stack + this.state.counting}</Text>
        </View>
        <View style={styles.botMargin}>
          <Button title="navigate 跳转页面 但是不能跳转到当前页" onPress={() => navigation.navigate('Detail')} />
        </View>
        <View style={styles.botMargin}>
          <Button
            title="push 不停的堆栈跳转页"
            onPress={() => navigation.push('Detail', { ...params, stack: params.stack + 1 })}
          />
        </View>
        <View style={styles.botMargin}>
          <Button title="goBack 返回" onPress={() => navigation.goBack()} />
        </View>
        <View style={styles.botMargin}>
          <Button title="popToTop 回到第一个打开的页面" onPress={() => navigation.popToTop()} />
        </View>
        <View style={styles.botMargin}>
          <Button title="向目标页面传递信息" onPress={() => navigation.navigate('Home', { message: params.title })} />
        </View>
        <View style={styles.botMargin}>
          <Button
            title="通过setOptions修改头部参数"
            onPress={() => {
              navigation.setOptions({
                headerRight: () => (
                  <Button
                    title="修改页面内容"
                    onPress={() => {
                      this.setState({
                        counting: this.state.counting + 1,
                      });
                    }}
                  />
                ),
              });
            }}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  productImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
  },
  productTitle: {
    fontSize: 24,
    color: 'black',
  },
  productSubTitle: {
    fontSize: 18,
    color: 'gray',
  },
  botMargin: {
    marginBottom: 10,
  },
});
