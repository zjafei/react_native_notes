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
        <Button
          title="传递参数给设置页面"
          onPress={() => {
            navigation.navigate('PageTab', {
              screen: 'Setting',
              params: {
                text: params.title,
              },
            });
          }}
        />
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
