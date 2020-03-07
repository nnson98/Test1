import React  from 'react';
import { StyleSheet, Text, View,FlatList,TouchableOpacity, ActivityIndicator } from 'react-native';
import { Component } from 'react';
import Navigator from './routes/homeStack';

export default function App() { 
  return (
    <Navigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item:{
    flex:1,
    alignSelf:'stretch',
    padding:10,
    margin:5,
    alignItems:'center',
    justifyContent:'center',
    borderBottomColor:'#eee',
    borderBottomWidth:1,
    borderRadius:3,
  }
});
