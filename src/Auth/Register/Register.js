//Define all usable component first
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
import { Dropdown } from 'react-native-material-dropdown';
import CheckBox from 'react-native-check-box';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
var st = require('./styles/styles');
import Icon from 'react-native-vector-icons/EvilIcons';
const background = require("./assets/bg.jpg");
const logo = require("./assets/logo.png");
const reg = require("./assets/register.png");
const flag = require("./assets/flag/flag.png");
const tw = require("./assets/flag/teamwork.png");
const info = require("./assets/flag/info.png");
const glob = require("./assets/flag/global_services.png");
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class Register extends React.Component {
constructor(props) {
    super(props)
	//Declare the form value first here;
    this.state = {
		checked:false,
      name: '',email:'',
     city:'',state:''
    };
}
    static navigationOptions = ({ navigation, screenProps }) => ({
                  header: null,
                  drawerLockMode: 'locked-closed',
});



onRegisterPress = async () => {
})

render() {
	  const { navigate } = this.props.navigation;
	  let city = [{
      value: 'abc',
    }, {
      value: 'abc',
    }, {
      value: 'abc',
    }];
    return (
	<View>
	<Text style={st.MainText}>Login Form</Text>
	</View>
	/*Example code-------------
<View style={st.wrapper}>
       <View style={{flex:0.5,alignItems:'center'}}>
				  <Text style={st.MainText}>Login To Your Account</Text>
				</View>
				
				<View style={{flex:3}}>
			     <KeyboardAwareScrollView ref='scroll' extraHeight={100} enableOnAndroid={true} keyboardShouldPersistTaps="handled" >
				    <View style={{paddingVertical:14}}>
								<View style={{flexDirection:'row',paddingLeft:10}}>
										<View style={st.vicon}>
										<Icon name='user' size={28}  color = {'#008080'}/>
										 </View>
										<View style={st.labelOuter}>
										<Text style={st.label}>Name</Text>
										 </View>
							   </View>
							  <View style={st.InputConatiner}>
							   <TextInput
								 placeholder={'Name'}
								 autoFocus={true}
								 value={this.state.name}
								 style={st.input}
								 underlineColorAndroid="transparent"
								 onChangeText={name => this.setState({name})} />
							   </View>
							   <Text style={st.war}>{this.state.war1}</Text>
					</View>      
					 <View style={{paddingVertical:14}}>
								<View style={{flexDirection:'row',paddingLeft:10}}>
										<View style={st.vicon}>
										<Icon name='envelope' size={28}  color = {'#008080'}/>
										 </View>
										<View style={st.labelOuter}>
										<Text style={st.label}>Email</Text>
										 </View>
							   </View>
							  <View style={st.InputConatiner}>
							   <TextInput
								 placeholder={'Email'}
								 autoFocus={false}
								 value={this.state.email}
								 style={st.input}
								 underlineColorAndroid="transparent"
								 onChangeText={email => this.setState({email})} />
							   </View>
							   <Text style={st.war}>{this.state.war2}</Text>
							   <Text style={st.war}>{this.state.war3}</Text>
					</View> 
					 <View style={{paddingVertical:14,flexDirection:'row'}}>
					             <View style={{flex:1}}>
									  <View style={{flexDirection:'row',paddingLeft:8}}>
												<View style={st.vicon}>
												<Icon name='lock' size={28}  color = {'#008080'}/>
												 </View>
												<View style={st.labelOuter}>
												<Text style={st.label}>Password</Text>
												 </View>
									   </View>
									   <View style={st.InputConatiner}>
									   <TextInput
										 placeholder={'Password'}
										 autoFocus={false}
										 value={this.state.pass}
										 secureTextEntry
										 style={st.input1}
										 underlineColorAndroid="transparent"
										 onChangeText={pass => this.setState({pass})} />
								
										 </View>
										 <Text style={st.war}>{this.state.war4}</Text>
										  <Text style={st.war}>{this.state.war5}</Text>
								 </View>
								   <View style={{flex:1}}>
										 <View style={{flexDirection:'row',alignItems:'flex-start',paddingLeft:8}}>
												<View style={st.vicon}>
												<Icon name='lock' size={28}  color = {'#008080'}/>
												 </View>
												<View style={st.labelOuter}>
												<Text style={st.label}>Confirm Password</Text>
												 </View>
									    </View>
									    <View style={st.InputConatiner}>
									      <TextInput
										  placeholder={'Confirm Password'}
										   autoFocus={false}
										  value={this.state.cpass}
										  secureTextEntry
										  style={st.input1}
										  underlineColorAndroid="transparent"
										  onChangeText={cpass => this.setState({cpass})} />
								
										 </View>
								</View>
					</View>
				
					
					
					
					
				
</KeyboardAwareScrollView>				
				</View>
				<View style={st.account}>
				<TouchableOpacity activeOpacity={.5} onPress={() => this.onRegisterPress()}>
						     <Image
                          source={reg}
                          style={st.loginbtn}/>
						  </TouchableOpacity>
				</View>
				
		   </View>
	 </View>
	
    );
	*/
  }

}
