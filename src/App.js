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
} from 'react-native';

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
      <View style={styles.row}>
        <Text>product: {item.key}</Text>
      </View>
    );
  };
  render() {
    return (
      <>
        <View style={styles.search}>
          <TextInput style={styles.input} placeholder="搜索商品" />
          <Button
            style={styles.button}
            title="搜索"
            onPress={() => {
              Alert.alert('你点击了按钮');
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
            <Text style={styles.advertisementItem}>轮播广告1</Text>
            <Text style={styles.advertisementItem}>轮播广告2</Text>
            <Text style={styles.advertisementItem}>轮播广告3</Text>
          </ScrollView>
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
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    // borderWidth: 2,
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
});
