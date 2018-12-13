import React, { Component,PropTypes  } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
  AsyncStorage,
  Platform,
  ImageBackground,
  Alert,
  View
} from 'react-native';
import Expo from 'expo';
import { Font, AppLoading } from "expo";
import { StackNavigator, DrawerNavigator } from 'react-navigation';
var st = require('./styles/styles');

export default class RegisterOption extends React.Component {
constructor(props) {
    super(props)
    this.state = {
      fontLoaded: false,
    };
}
    static navigationOptions = ({ navigation, screenProps }) => ({
                  header: null,
                  drawerLockMode: 'locked-closed',
});

render() {
    return (
      <View></View>
    );
  }

}
