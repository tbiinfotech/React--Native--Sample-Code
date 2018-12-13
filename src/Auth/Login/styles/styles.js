'use strict';

var React = require('react-native');
import {
 Dimensions
 } from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

var {
  StyleSheet,
} = React;

module.exports = StyleSheet.create({
     wrapper: {
        flex: 1,
        alignSelf: 'stretch',
      },
	    container: {
        flex: 4,
        alignSelf: 'stretch',
      },
	  InputConatiner:{
		  flexDirection:'row',
		  marginLeft:11,
		  marginRight:11,
		  borderBottomWidth:1,
		  borderColor:'#999999',
		  paddingLeft:17,
		  paddingTop:5,
		  paddingBottom:5,
		  alignItems:'center'
		  
	  },
	   input: {
       fontSize: 18,
        color: '#404040',
        paddingVertical: 4,
      },
	  input1: {
		  width:width,
       fontSize: 18,
        color: '#404040',
        paddingVertical: 4,
      },
	  labelOuter:{
		justifyContent:'center',
		alignItems:'center'  
	  },
	   label:{
		 fontSize:18,
         color:'#999999'		 
	  },
	  vicon:{
		  justifyContent:'center',
		  alignItems:'center',
		  paddingLeft:20
	  },
      MainText: {
        fontSize: 24,
        fontWeight: 'bold',
       // textAlign: 'center',
        color: '#008080',
      },
	  submit:{
		  paddingVertical:18,
		  alignItems:'center',
		  justifyContent:'center'
	  },
     
      customHeader: {
        marginTop: 20,
        height: 80,
        backgroundColor: '#45C3F3',
      },
      logoIco: {
        height:120,
        width: 180,
        //justifyContent: 'center',
      //  alignItems: 'center',
      },
	  logoview:{
		flex:1,
		justifyContent:'center',
		alignItems:'center'  
	  },
	  loginbtn:{
		height:40,width:200  
	  },
     backgroundImage: {
        flex: 1,

        //resizeMode: 'stretch',
        width: null,
        height: null,
      },
	  account:{
		  flex:1,
		  justifyContent:'center',
		  alignItems:'center'
	  },
	  create:{
		  fontSize:16,fontWeight:'bold',color:'#008080'
	  },
	  dont:{
		  fontSize:16,color:'#404040'
	  },
     war:{
		 marginLeft:28,color:'red',fontSize:10
	 },
   backButton: {
        paddingLeft: 20,
        paddingVertical: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
      }
     
});
