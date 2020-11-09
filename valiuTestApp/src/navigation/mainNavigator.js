import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {enableScreens} from 'react-native-screens';
import Home from '../screens/home/home';
import Modal from '../screens/modal/modal';

enableScreens();

const Stack = createStackNavigator();
const RootStack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerTransparent: true, title: ''}}
      />
    </Stack.Navigator>
  );
};

const RootStackScreen = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal">
        <RootStack.Screen
          name="Main"
          component={MainStackNavigator}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="Modal"
          component={Modal}
          options={{headerTransparent: true, title: '', headerLeft: null}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackScreen;
