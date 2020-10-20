/**
 * @format
 */

import './index.css'; 
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'materialize-css'
import * as serviceWorker from './serviceWorker';

AppRegistry.registerComponent(appName, () => App);

serviceWorker.unregister();
