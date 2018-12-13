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
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
var st = require('./styles/styles');
import Icon from 'react-native-vector-icons/EvilIcons';
const background = require("./assets/backScreen.png");
// access the image from folder.
const btn = require("./assets/btn.png");
export default class Login extends React.Component {
constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',war1:'',war2:'',
      isLoaderlVisible: false,
    };
}
    static navigationOptions = ({ navigation, screenProps }) => ({
                  header: null,
                  drawerLockMode: 'locked-closed',
});

async componentWillMount()
    {
	const { navigate } = this.props.navigation;
	const UserRecord = await AsyncStorage.getItem('userLogin');
      if(UserRecord !== null)
      {

           navigate('Main');
      }
	 else
	  {
       navigate('Login');
	  }

	}
	// function for execute login process using api
onLoginPress = async () => {

  }


render() {
	  const { navigate } = this.props.navigation;
    return (
	//Login Form
    <View style={st.container}>
		  <View style={{flex:0.2,justifyContent:'center',alignItems:'center'}}>
		  </View>
				<View style={{flex:0.1,alignItems:'center'}}>
				<Text style={st.MainText}>Login To Your Account</Text>
				</View>
				<View style={{flex:0.1,alignItems:'center'}}>
				
				</View>
				<View style={{flex:2.5}}>
				  <KeyboardAwareScrollView ref='scroll' extraHeight={100} enableOnAndroid={true} keyboardShouldPersistTaps="handled" >
				          <View style={{paddingVertical:20}}>
								<View style={{flexDirection:'row'}}>
										<View style={st.vicon}>
										<Icon name='user' size={36}  color = {'#999999'}/>
										 </View>
										<View style={st.labelOuter}>
										<Text style={st.label}>Username</Text>
										 </View>
							   </View>
							  <View style={st.InputConatiner}>
							   <TextInput
								 placeholder={'Email'}
								 value={this.state.username}
								 style={st.input1}
								 underlineColorAndroid="transparent"
								 onChangeText={username => this.setState({username})} />
							   </View>
							   <Text style={st.war}>{this.state.war1}</Text>
						   </View>
						   <View style={{paddingVertical:20}}>
								<View style={{flexDirection:'row'}}>
										<View style={st.vicon}>
										<Icon name='lock' size={38}  color = {'#999999'}/>
										 </View>
										<View style={st.labelOuter}>
										<Text style={st.label}>Password</Text>
										 </View>
							   </View>
							  <View style={st.InputConatiner}>
							    <View style={{flex:1}}>
							   <TextInput
								 placeholder={'Password'}
								 placeholderTextColor={'#b2b2b2'}
								 value={this.state.password}
								 secureTextEntry
								 style={st.input}
								 underlineColorAndroid="transparent"
								 onChangeText={password => this.setState({password})} />
								  </View>
								   <View>
								 <Text style={{color:'#008080',fontSize:18}}>Forgot?</Text>
								 </View>
							   </View>
							    <Text style={st.war}>{this.state.war2}</Text>
						   </View>
						  </KeyboardAwareScrollView> 
						  <View style={st.submit}>
						   <TouchableOpacity activeOpacity={.5} onPress={() => this.onLoginPress()}>
						     <Image
                          source={btn}
                          style={st.loginbtn}/>
						  </TouchableOpacity>
						   </View>
				</View>
			<View style={st.account}>
				<View style={{flexDirection:'row'}}>
					<Text style={st.dont}>Don't have an account? </Text>
					 <TouchableOpacity activeOpacity={.5} onPress={() => {navigate('Register')} }>
					<Text style={st.create}> Create Now.</Text>
					</TouchableOpacity>
				</View>
				</View>
		   </View>
	 </View>

    );
  }

}
