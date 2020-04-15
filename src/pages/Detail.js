import React, { Component } from 'react';
import { ScrollView, Image, View, Text, Button, StatusBar, Dimensions, StyleSheet } from 'react-native';

export default class page extends Component {
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
          <Text style={styles.productSubTitle}>stack: {params.stack}</Text>
        </View>
        {/* navigate 不能跳转 因为已经在详情页面了  */}
        <Button title="Go to Details with navigate" onPress={() => navigation.navigate('Detail')} />
        {/* push 能跳转 因为可以不停的堆栈  */}
        <Button
          title="Go to Details with push"
          onPress={() => navigation.push('Detail', { ...params, stack: params.stack + 1 })}
        />
        {/* goBack 就是消栈  */}
        <Button title="Go back" onPress={() => navigation.goBack()} />
        {/* popToTop 就是清栈  */}
        <Button title="Go back to first screen in stack" onPress={() => navigation.popToTop()} />
        {/* navigate 可以回传参数给其他页面  */}
        <Button
          title="Post some text to Home"
          onPress={() => {
            navigation.navigate('Home', { textFromDetail: params.title });
            // 嵌套页面的参数传递
            // navigation.navigate('Account', {
            //     screen: 'Settings',
            //     params: { user: 'jane' },
            //   });
          }}
        />
        <Button title="Update the title" onPress={() => navigation.setOptions({ title: 'Updated!' })} />
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
});
