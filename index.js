/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Store from './src/redux/config/store';
// import App from './App';
import AtomExample from './example/atomExample';
import 'react-native-gesture-handler';

// AppRegistry.registerComponent(appName, () => AtomExample);
AppRegistry.registerComponent(appName, () => Store);
