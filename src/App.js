import React, { Component } from 'react';
import {
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
  Alert,
  TouchableHighlight,
  StatusBar,
  Image,
} from 'react-native';

const circleSize = 8;
const circleMargin = 5;

export default class FlexBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      dataSource: [
        { key: 'product0' },
        { key: 'product1' },
        { key: 'product2' },
        { key: 'product3' },
        { key: 'product4' },
        { key: 'product5' },
        { key: 'product6' },
        { key: 'product7' },
        { key: 'product8' },
        { key: 'product9' },
        { key: 'product10' },
        { key: 'product11' },
        { key: 'product12' },
        { key: 'product13' },
        { key: 'product14' },
        { key: 'product15' },
        { key: 'product16' },
        { key: 'product17' },
        { key: 'product18' },
        { key: 'product19' },
        { key: 'product20' },
        { key: 'product21' },
        { key: 'product22' },
        { key: 'product23' },
        { key: 'product24' },
        { key: 'product25' },
        { key: 'product26' },
        { key: 'product27' },
        { key: 'product28' },
        { key: 'product29' },
      ],
      advertisements: [
        {
          title: 'ad 01',
          backgroundColor: 'yellow',
          url: 'https://hbimg.huabanimg.com/c8e5558c493e3ac04936eb111946ba85a5751873dd156-r8Vr0M_fw658',
        },
        {
          title: 'ad 02',
          backgroundColor: 'red',
          url: 'https://hbimg.huabanimg.com/f7b0d94e4f0658aa817d01f694e92b3bdf3edec314da75-zdyHkQ_fw658',
        },
        {
          title: 'ad 03',
          backgroundColor: 'green',
          url: 'https://hbimg.huabanimg.com/afbd40bb8f2d926eea914d540bcb3df32cc1f2e993649-o0ErFs_fw658',
        },
      ],
      searchText: '',
    };
  }

  componentDidMount() {
    this._startTimer();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  _startTimer = () => {
    this.interval = setInterval(() => {
      const nextPage = this.state.currentPage + 1 >= 3 ? 0 : this.state.currentPage + 1;
      this.setState({
        currentPage: nextPage,
      });
      this.scrollView.scrollResponderScrollTo({
        x: nextPage * Dimensions.get('window').width,
        y: 0,
        animated: true,
      });
    }, 2000);
  };
  _renderRow = ({ item }) => {
    return (
      <TouchableHighlight
        onPress={() => {
          Alert.alert(`你点了${item.key}`);
        }}
      >
        <View style={styles.row}>
          <Text>product: {item.key}</Text>
        </View>
      </TouchableHighlight>
    );
  };
  render() {
    return (
      <>
        <StatusBar backgroundColor="black" />
        <View style={styles.search}>
          <TextInput
            style={styles.input}
            placeholder="搜索商品"
            value={this.state.searchText}
            onChangeText={(text) => {
              console.log(this.state.searchText);
              this.setState({
                searchText: text,
              });
            }}
          />
          <Button
            style={styles.button}
            title="搜索"
            onPress={() => {
              Alert.alert(`搜索内容: ${this.state.searchText}`);
            }}
          />
        </View>
        <View style={styles.advertisement}>
          <ScrollView
            ref={(scrollView) => {
              this.scrollView = scrollView;
            }}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            pagingEnabled={true}
          >
            {this.state.advertisements.map((item, index) => (
              <TouchableHighlight
                key={index}
                onPress={() => {
                  Alert.alert(`你点了${item.title}`);
                }}
              >
                <Image style={styles.advertisementItem} source={{ uri: item.url }} />
              </TouchableHighlight>
            ))}
          </ScrollView>
          <View style={styles.indicator}>
            {this.state.advertisements.map((_, index) => (
              <View key={index} style={[styles.circle, index === this.state.currentPage ? styles.circleCur : {}]} />
            ))}
          </View>
        </View>
        <View style={styles.products}>
          <FlatList data={this.state.dataSource} renderItem={this._renderRow} />
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
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
  },
  button: {
    flex: 1,
  },
  advertisement: {
    height: 180,
    backgroundColor: 'green',
  },
  advertisementItem: {
    width: Dimensions.get('window').width,
    height: 180,
    backgroundColor: 'gray',
  },
  products: {
    flex: 1,
  },
  row: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicator: {
    position: 'absolute',
    top: 160,
    flexDirection: 'row',
    justifyContent: 'center',
    left: 0,
    right: 0,
  },
  circle: {
    width: circleSize,
    height: circleSize,
    borderRadius: circleSize / 2,
    backgroundColor: 'white',
    marginHorizontal: circleMargin,
  },
  circleCur: {
    backgroundColor: 'orange',
  },
});
