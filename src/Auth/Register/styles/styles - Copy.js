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
      },
      container: {
        flex: 1,
        alignSelf: 'stretch',
      },
      containerHeader: {
        backgroundColor: '#43C3F4',
        alignSelf: 'stretch',
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      RegisterBody:{
        flex: 2,
        paddingTop: 20,
        marginBottom: 20,
        justifyContent: 'flex-start',
        alignItems: 'center',
      },
      RegisterBodycnt: {
        backgroundColor: 'red',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flex: 2,
      },
      CmpnyLoginText: {
        marginTop: 60,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },

      LogoImage: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
      },
      backIco: {
        maxWidth: 30,
        maxHeight: 30,
      },
      logoIco: {
        maxHeight:120,
        maxWidth: 120,
        top: 60,
        justifyContent: 'center',
        alignItems: 'center',
      },
      input: {
        width: 300,
        fontSize: 19,
        color: 'black',
        paddingVertical: 4,
      },

      input1: {
        width: 145,
        fontSize: 19,
        color: 'black',
        paddingVertical: 4,
      },
      RegButton: {
        paddingTop: 10,
        paddingBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputWrap:{
       justifyContent: 'center',
       flexDirection: "row",
       marginVertical: 20,
       borderColor:'#47C5F5',
       borderBottomWidth: 2,
       backgroundColor: 'transparent'
     },
     inputWrap1:{
      marginLeft: 10,
      justifyContent: 'center',
      flexDirection: "row",
      marginVertical: 20,
      borderColor:'#47C5F5',
      borderBottomWidth: 2,
      backgroundColor: 'transparent'
    },
     inputComb: {
       flex: 2,
       flexDirection: 'row',
     },

      backgroundImage: {
        flex: 1,
        //resizeMode: 'stretch',
        width: null,
        height: null,
      },
      btnIco:{
        height: 30,
        width: 30,
        alignItems: 'flex-start',
        justifyContent: 'center',
      },
      HomeBtn: {
        flexDirection: 'row',
        backgroundColor: '#59CCF8',
        marginTop: 15,
        borderRadius: 23,
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderColor:'#47C5F5',
        borderWidth: 1,
        alignSelf: 'stretch',
        width: 220,
      },
      AccntBtn: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        paddingVertical: 6,
        paddingHorizontal: 30,
        alignItems: 'center',
        borderColor:'#fff',
        borderRadius: 22,
        borderWidth: 1,
      },
      btnAccnt: {
        color: 'white',
        fontSize: 14,
      },
      IcoImage: {
        //flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
        alignItems: 'flex-start',
      },
      IcoText: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
      },
      btnText: {
        fontSize: 17,
        color: 'white',
      },
      backbtnText: {
        fontSize: 20,
        color: 'white',
        alignItems: 'center',
        marginLeft: 10,
        flex: 1,
        justifyContent: 'center',
      },
      FrgtText: {
        color: '#D8D8D8',
        fontSize: 13,
        paddingBottom: 5,
        borderColor:'#D8D8D8',
        borderBottomWidth: 1,
      },
      RightNav: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      backButton: {
        paddingLeft: 20,
        paddingVertical: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
      },
});
