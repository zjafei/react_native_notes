import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { Component } from 'react';
import { Button } from 'react-native';
import Home from './Home';
import Detail from './Detail';
import Setting from './Setting';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function PageTab() {
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
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
            component={PageTab}
          />
          <Stack.Screen
            name="Detail"
            options={({ route: { params } }) => ({
              title: `${params.title}详情页`,
              //   headerLeft: () => {
              //     // 在头部添加自定义组件
              //     return <Button title="<" />;
              //   },
              headerRight: () => {
                // 在头部添加自定义组件
                return <Button title="x" />;
              },
              headerStyle: {
                backgroundColor: '#2296F3',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            })}
            component={Detail}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
