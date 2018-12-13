'use strict';

var React = require('react-native');
import {
 Dimensions
 } from 'react-native';
const width = Dimensions.get('window').width;

var {
  StyleSheet,
} = React;

module.exports = StyleSheet.create({
     wrapper: {
        flex: 1,
        alignSelf: 'stretch',
		justifyContent:'center',
		 alignItems: 'center',
      },
      containerHeader: {
        alignSelf: 'stretch',
		flex:1
      },
      backIco: {
        maxWidth: 30,
        maxHeight: 30,
        zIndex: 1,
      },
      backButton: {
        paddingLeft: 20,
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
      },
      backgroundImage: {
        flex: 1,
        width: null,
        height: null,
      },
      HomeButtons:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       // marginBottom: 80,
      },
      HomeBtn: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginTop: 22,
        borderRadius: 22,
        paddingVertical: 5,
        paddingHorizontal: 12,
        borderColor:'#fff',
        borderWidth: 1,
        alignSelf: 'stretch',
        width: width-70,
      },
      IcoImage: {
        //flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
        alignItems: 'flex-start',
      },
      btnIco:{
        height: 30,
        width: 30,
        alignItems: 'flex-start',
        justifyContent: 'center',
      },
      IcoText: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
      },
      btnText: {
        fontSize: 18,
        color: '#545454',
      },
});
