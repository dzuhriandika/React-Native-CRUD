import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {LoginStack, HomeStack} from './stackNavigator';

export default createAppContainer(
  createSwitchNavigator(
    {
      Login: LoginStack,
      Home: HomeStack,
    },
    {initialRouteName: 'Login'},
  ),
);
