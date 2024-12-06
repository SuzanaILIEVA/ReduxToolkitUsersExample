import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ADDNEWUSER, UPDATEUSER, USERDETAIL, USERS} from '../utils/route';
import UsersScreen from '../screens/users';
import AddNewUserScreen from '../screens/users/addNewUser';
import UserDetailScreen from '../screens/users/userDetailScreen';
import UpdateUserScreen from '../screens/users/updateUserScreen';

const Stack = createNativeStackNavigator();
const RouteNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={USERS} component={UsersScreen} />
      <Stack.Screen name={ADDNEWUSER} component={AddNewUserScreen} />
      <Stack.Screen name={USERDETAIL} component={UserDetailScreen} />
      <Stack.Screen name={UPDATEUSER} component={UpdateUserScreen} />
    </Stack.Navigator>
  );
};

export default RouteNavigation;

const styles = StyleSheet.create({});
