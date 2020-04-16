import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react';
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
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            options={{
              title: '首页',
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
