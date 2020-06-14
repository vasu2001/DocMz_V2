import {createStackNavigator} from 'react-navigation-stack';
// import Login from '../screens/authentication/login/Login';
import Signup from '../screens/examples/DmzSignup/DmzSignup';
import Login from '../screens/examples/DmzLogin/DmzLogin';
import SignupV2 from '../screens/examples/DmzSignup/DmzSignupV2';
const AuthNavigation = createStackNavigator(
  {
    loginScreen: Login,
    // signupScreen: Signup,
    signupScreen: SignupV2,
  },
  {
    initialRouteName: 'loginScreen',
    headerMode: 'none',
  },
);

export default AuthNavigation;
