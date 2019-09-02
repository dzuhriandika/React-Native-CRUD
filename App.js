import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './Components/Login';
import Register from './Components/Register';
import Navigator from './Components/Navigator';

const MainNavigator = createStackNavigator({
  Login: { screen: Login },
  Register: { screen: Register },
  Navigator: { screen: Navigator }
});
const App = createAppContainer(MainNavigator);
export default App;