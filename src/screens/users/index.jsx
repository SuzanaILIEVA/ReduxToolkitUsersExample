import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import {useSelector} from 'react-redux';
import UserCard from '../../components/users/userCard';
import FloatActionButton from '../../components/ui/floatActionButton';
import {ADDNEWUSER} from '../../utils/route';

const UsersScreen = ({navigation}) => {
  const {users} = useSelector(state => state.users);
  //   console.log(users.name);

  return (
    <View style={defaultScreenStyle.container}>
      {/* Render users */}

      <FlatList
        ListEmptyComponent={
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              fontWeight: '700',
              marginTop: 20,
            }}>
            No users have been added yet
          </Text>
        }
        data={users}
        renderItem={({item}) => <UserCard user={item} />}
      />

      <FloatActionButton onPress={() => navigation.navigate(ADDNEWUSER)} />
    </View>
  );
};

export default UsersScreen;

const styles = StyleSheet.create({});
