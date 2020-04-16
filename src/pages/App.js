import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react';
import { Text } from 'react-native';
import Home from './Home';
import Detail from './Detail';

const Stack = createStackNavigator();

export default class Page extends Component {
  render() {
    return (
      <NavigationContainer>
        {/*
            Stack.Navigator
            最基本的导航 基本等于路由表
            <Stack.Screen
                name="Home" // 页面的唯一标识 近似于 url
                options={{  // 对页面外围导航框的设置
                    title: '首页',
                }}
                component={Home} // 页面组件
            />
        */}

        <Stack.Navigator
          screenOptions={
            {
              // screenOptions 设置所有页面的导航组件
            }
          }
        >
          <Stack.Screen
            name="Home"
            options={{
              // title：标题文字。
              // headerStyle：样式对象，将应用于包装头部的 View。
              // headerTintColor：设置后退按钮和标题的颜色颜色。
              // headerTitleStyle：样式对象，将应用于包装标题的 Text。
              title: '首页',
              headerStyle: {
                backgroundColor: '#f4511e',
                shadowOpacity: 0,
                elevation: 0,
                boxShadow: '',
                height: 48,
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              // headerLeft: 自定义左侧元素
              // headerTitle: 自定义标题元素
              // headerRight: 自定义右侧元素
              headerLeft: () => <Text>左</Text>,
              headerTitle: () => <Text>自定义标题</Text>,
              headerRight: () => <Text>右</Text>,
            }}
            component={Home}
          />
          <Stack.Screen
            name="Detail"
            options={({ route: { params } }) => ({
              title: `${params.title}详情页`,
            })}
            component={Detail}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
