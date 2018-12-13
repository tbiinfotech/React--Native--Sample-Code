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
		  marginLeft:10,
		  marginRight:10,
		  borderBottomWidth:1,
		  borderColor:'#999999',
		  paddingLeft:10,
		  paddingTop:4,
		  paddingBottom:5,
		  alignItems:'center'
		  
	  },
	   input: {
        width: width-width/4.8,
        fontSize: 14,
        color: '#404040',
        paddingVertical: 2,
      },
	   input1: {
         width: width/2,
        fontSize: 14,
        color: '#404040',
        paddingVertical: 2,
      },
	  labelOuter:{
		justifyContent:'center',
		alignItems:'center'  
	  },
	   label:{
		 fontSize:16,
         color:'#008080'		 
	  },
	  vicon:{
		  justifyContent:'center',
		  alignItems:'flex-start',
		  
	  },
	    imgicon:{
		  justifyContent:'center',
		  alignItems:'center',
		  paddingLeft:15,
		   paddingRight:5
	  },
      MainText: {
        fontSize: 20,
        fontWeight: 'bold',
       // textAlign: 'center',
        color: '#008080',
      },
	  submit:{
		  paddingVertical:40,
		  alignItems:'center',
		  justifyContent:'center'
	  },
     
      customHeader: {
        marginTop: 20,
        height: 80,
        backgroundColor: '#45C3F3',
      },
      logoIco: {
        height:90,
        width: 150,
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
		  flex:0.8,
		  justifyContent:'center',
		  alignItems:'center'
	  },
	  create:{
		  fontSize:16,fontWeight:'bold',color:'#008080'
	  },
	  dont:{
		  fontSize:16,color:'#404040'
	  },
	  dropdown1:{
		   borderBottomWidth:0,
		   width:width/2.4,
		   paddingTop:0,
		   paddingBottom:0,
		   height:24,
		   paddingLeft:10
	  },
	  dropdown2:{
		 borderBottomWidth:0,
		 width:width/1.1,
		 paddingTop:0,
		 paddingBottom:0,
		 height:24
	 },
   backButton: {
        paddingLeft: 20,
        paddingVertical: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
      },
	  war:{
		 marginLeft:28,color:'red',fontSize:10
	 },
     
});
