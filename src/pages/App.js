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
        <Stack.Navigator>
          <Stack.Screen name="Home" options={{ title: '首页' }} component={Home} />
          <Stack.Screen name="Detail" options={{ title: '详情' }} component={Detail} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
