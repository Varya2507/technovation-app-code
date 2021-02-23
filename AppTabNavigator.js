import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import FoodDonationScreen from '../screens/FoodDonationScreen';
import FoodRequestScreen from '../screens/FoodRequestScreen';
import {Icon} from 'react-native-elements';

export const AppTabNavigator = createBottomTabNavigator({
  DonateFood : {
    screen: FoodDonationScreen,
    navigationOptions :{
      tabBarLabel : "Donate Food",
      tabBarIcon: ({ color, size }) => ( <Icon name="bell" color={color} size={25} /> )
    }
  },
  FoodRequest: {
    screen: FoodRequestScreen,
    navigationOptions :{
      tabBarLabel : "Food Request",
    }
  }
});