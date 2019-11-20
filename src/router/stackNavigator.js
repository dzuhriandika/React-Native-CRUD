import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from '../screens/Login';
import HomeScreen from '../screens/Home';
import AddScreen from '../screens/AddPost';
import SingleScreen from '../screens/SinglePost';
import RegisterScreen from '../screens/Register';
import EditScreen from '../screens/EditPost';

export const LoginStack = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: null,
      },
    },
    Register: {
      screen: RegisterScreen,
      navigationOptions: {
        header: null,
      },
    },
  },
  {initialRouteParams: 'Login'},
);

export const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null,
      },
    },
    Add: {
      screen: AddScreen,
      navigationOptions: {
        header: null,
      },
    },
    Single: {
      screen: SingleScreen,
      navigationOptions: {
        header: null,
      },
    },
    Edit: {
      screen: EditScreen,
      navigationOptions: {
        header: null,
      },
    },
  },
  {initialRouteParams: 'Home'},
);
