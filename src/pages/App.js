import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { Component } from 'react';
import Home from './Home';
import Detail from './Detail';
import Setting from './Setting';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function PageTab() {
  // 底部 tab 页面
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  );
}

export default class Page extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="PageTab"
            options={{
              title: '首页',
            }}
            component={PageTab}
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
