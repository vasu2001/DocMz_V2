import {createStackNavigator} from 'react-navigation-stack';
// import Login from '../screens/authentication/login/Login';
import Signup from '../screens/examples/DmzSignup/DmzSignup';
import LoginV2 from '../screens/examples/DmzLogin/DmzloginV2';
import SignupV2 from '../screens/examples/DmzSignup/DmzSignupV2';
import {createAppContainer} from 'react-navigation';
const AuthNavigation = createStackNavigator(
  {
    loginScreen: LoginV2,
    // signupScreen: Signup,
    signupScreen: SignupV2,
  },
  {
    initialRouteName: 'loginScreen',
    headerMode: 'none',
  },
);

export default createAppContainer(AuthNavigation);
