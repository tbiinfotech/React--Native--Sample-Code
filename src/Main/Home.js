import React, { Component,PropTypes  } from 'react';
import {
  AppRegistry,
  StyleSheet,ScrollView,
  Text,
  Image,
  TextInput,
  TouchableOpacity,TouchableHighlight,
  Dimensions,
  ActivityIndicator,Share,
  AsyncStorage,
  Platform,
  ImageBackground,Linking,
  Alert,
  View
} from 'react-native';
import Expo from 'expo';
import { Font, AppLoading ,Video} from "expo";
import VideoPlayer from '@expo/videoplayer';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Modal from 'react-native-modalbox';
var st = require('./styles/styles');

export default class Home extends React.Component {
constructor(props) {
	 super(props)
    this.state = {};
}
static navigationOptions = ({ navigation, screenProps }) => ({
                  header: null,
              //    drawerLockMode: 'locked-closed',
});
//componentWillMount() is invoked just before mounting occurs. It is called before render(), therefore calling setState() synchronously in this method will not trigger an extra rendering. 
async componentWillMount() {

}
render() {
	//view of home screen
    return (
    <View>					
	<Text>Home Screen View<Text>					
	</View>
		 
    );
  }

}
