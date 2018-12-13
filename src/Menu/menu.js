import React, { Component } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  AsyncStorage,
    ImageBackground,Linking,
  View
} from "react-native";

import { NavigationActions } from "react-navigation";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
var styles = require('./styles/styles');
import Icon from 'react-native-vector-icons/EvilIcons';
class DrawerMenu extends Component {
  constructor(props) {
      super(props)
      this.state = {
        DrawerType: '',
      };
  }

  _navigate(route) {
    return this.props.navigation.dispatch(
      NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: `${route}` })]
      })
    );
//Define left and right menu here
render() {
	   const { navigation } = this.props
    return (
	//content for menu screen
      <View style={styles.container}>
        <Text style={{fontSize:18,color:'#008080'}}>Menu1</Text>
		<Text style={{fontSize:18,color:'#008080'}}>Menu2</Text>
	</View>
	
    );
  }
}


DrawerMenu.defaultProps = {};

DrawerMenu.propTypes = {};

export default DrawerMenu;
