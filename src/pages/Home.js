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

export default class page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      currentPage: 0,
      dataSource: [
        { uri: require('../assets/images/pro0.jpg'), key: '0', title: 'product0 name', subTitle: 'product0 info' },
        { uri: require('../assets/images/pro1.jpg'), key: '1', title: 'product1 name', subTitle: 'product1 info' },
        { uri: require('../assets/images/pro2.jpg'), key: '2', title: 'product2 name', subTitle: 'product2 info' },
        { uri: require('../assets/images/pro3.jpg'), key: '3', title: 'product3 name', subTitle: 'product3 info' },
        { uri: require('../assets/images/pro4.jpg'), key: '4', title: 'product4 name', subTitle: 'product4 info' },
        { uri: require('../assets/images/pro5.jpg'), key: '5', title: 'product5 name', subTitle: 'product5 info' },
        { uri: require('../assets/images/pro6.jpg'), key: '6', title: 'product6 name', subTitle: 'product6 info' },
        { uri: require('../assets/images/pro7.jpg'), key: '7', title: 'product7 name', subTitle: 'product7 info' },
        { uri: require('../assets/images/pro8.jpg'), key: '8', title: 'product8 name', subTitle: 'product8 info' },
        { uri: require('../assets/images/pro9.jpg'), key: '9', title: 'product9 name', subTitle: 'product9 info' },
        { uri: require('../assets/images/pro0.jpg'), key: '10', title: 'product10 name', subTitle: 'product10 info' },
        { uri: require('../assets/images/pro1.jpg'), key: '11', title: 'product11 name', subTitle: 'product11 info' },
        { uri: require('../assets/images/pro2.jpg'), key: '12', title: 'product12 name', subTitle: 'product12 info' },
        { uri: require('../assets/images/pro3.jpg'), key: '13', title: 'product13 name', subTitle: 'product13 info' },
        { uri: require('../assets/images/pro4.jpg'), key: '14', title: 'product14 name', subTitle: 'product14 info' },
        { uri: require('../assets/images/pro5.jpg'), key: '15', title: 'product15 name', subTitle: 'product15 info' },
        { uri: require('../assets/images/pro6.jpg'), key: '16', title: 'product16 name', subTitle: 'product16 info' },
        { uri: require('../assets/images/pro7.jpg'), key: '17', title: 'product17 name', subTitle: 'product17 info' },
        { uri: require('../assets/images/pro8.jpg'), key: '18', title: 'product18 name', subTitle: 'product18 info' },
        { uri: require('../assets/images/pro9.jpg'), key: '19', title: 'product19 name', subTitle: 'product19 info' },
        { uri: require('../assets/images/pro0.jpg'), key: '20', title: 'product20 name', subTitle: 'product20 info' },
        { uri: require('../assets/images/pro1.jpg'), key: '21', title: 'product21 name', subTitle: 'product21 info' },
        { uri: require('../assets/images/pro2.jpg'), key: '22', title: 'product22 name', subTitle: 'product22 info' },
        { uri: require('../assets/images/pro3.jpg'), key: '23', title: 'product23 name', subTitle: 'product23 info' },
        { uri: require('../assets/images/pro4.jpg'), key: '24', title: 'product24 name', subTitle: 'product24 info' },
        { uri: require('../assets/images/pro5.jpg'), key: '25', title: 'product25 name', subTitle: 'product25 info' },
        { uri: require('../assets/images/pro6.jpg'), key: '26', title: 'product26 name', subTitle: 'product26 info' },
        { uri: require('../assets/images/pro7.jpg'), key: '27', title: 'product27 name', subTitle: 'product27 info' },
        { uri: require('../assets/images/pro8.jpg'), key: '28', title: 'product28 name', subTitle: 'product28 info' },
        { uri: require('../assets/images/pro9.jpg'), key: '29', title: 'product29 name', subTitle: 'product29 info' },
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
      isRefreshing: false,
    };
  }

  componentDidMount() {
    this._startTimer();
    const { navigation } = this.props;
    navigation.setOptions({
      headerRight: () => <Button onPress={() => this.setState({ count: this.state.count + 1 })} title="Update count" />,
    });
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
    const { navigation } = this.props;
    return (
      <TouchableHighlight
        onPress={() => {
          navigation.navigate('Detail', { stack: 1, ...item });
        }}
      >
        <View style={styles.row}>
          <Image source={item.uri} style={styles.productImage} />
          <View style={styles.productText}>
            <Text style={styles.productTitle}>名称: {item.title}</Text>
            <Text style={styles.productSubTitle}>描述: {item.subTitle}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  };

  _listRefresh = () => {
    if (this.state.isRefreshing === false) {
      console.log('isRefreshing');
      this.setState({
        isRefreshing: true,
      });
      setTimeout(() => {
        this.setState({
          isRefreshing: false,
        });
      }, 3000);
    }
  };

  _renderSeparator = () => <View style={styles.separator} />;
  render() {
    const {
      route: { params },
    } = this.props;
    return (
      <>
        <StatusBar backgroundColor="#f4511e" />
        <Text>{params ? params.textFromDetail : 'nothing'}</Text>
        <Text>count: {this.state.count}</Text>
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
              <TouchableHighlight key={index} onPress={() => {}}>
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
          <FlatList
            data={this.state.dataSource}
            renderItem={this._renderRow}
            ItemSeparatorComponent={this._renderSeparator}
            onRefresh={this._listRefresh}
            refreshing={this.state.isRefreshing}
          />
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
    flexDirection: 'row',
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
  productImage: {
    width: 40,
    height: 40,
    backgroundColor: 'red',
    marginLeft: 10,
    marginRight: 10,
  },
  productText: {
    flex: 1,
    marginBottom: 10,
    marginTop: 10,
  },
  productTitle: {
    flex: 3,
    fontSize: 16,
  },
  productSubTitle: {
    flex: 2,
    fontSize: 14,
    color: 'gray',
  },
  separator: {
    height: 1,
    width: Dimensions.get('window').width - 5,
    marginLeft: 5,
    backgroundColor: 'lightgray',
  },
});
