import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/home';
import ReviewDetails from '../screens/detail';

const Stack = createStackNavigator();

export default  Navigator =() =>{
  return (
      <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name='Home' component={Home} options={{ title: 'User'}} />
        <Stack.Screen
 name='ReviewDetails' component={ReviewDetails} options={{ title: 'UserDetails'}} />

      </Stack.Navigator>
      </NavigationContainer>
  )
}