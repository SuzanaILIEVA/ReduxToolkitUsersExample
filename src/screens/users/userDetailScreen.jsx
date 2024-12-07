import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import {
  compareNameSurname,
  getFirsLetterNameSurname,
  getRandomColor,
} from '../../utils/functions';
import themeColors from '../../theme/themeColors';
import {Calendar, Call, Man, Sms, Woman} from 'iconsax-react-native';
import Button from '../../components/ui/button';
import {useDispatch} from 'react-redux';
import {deleteUser} from '../../store/slice/userSlice';
import {UPDATEUSER, USERS} from '../../utils/route';
import {useNavigation} from '@react-navigation/native';

const UserDetailScreen = ({route}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {user} = route.params;
  console.log('user========>', user);

  const handleDelete = () => {
    dispatch(deleteUser({id: user.id}));
    navigation.navigate(USERS);
  };
  return (
    <View style={defaultScreenStyle.container}>
      <ScrollView>
        <View style={styles.containertwo}>
          <View style={[styles.userImage, {backgroundColor: getRandomColor()}]}>
            <Text style={styles.letters}>
              {getFirsLetterNameSurname(user.name, user.surname)}
            </Text>
          </View>
          <Text style={styles.name}>
            {compareNameSurname(user.name, user.surname)}
          </Text>
        </View>

        <View>
          <View style={styles.infoBox}>
            <Sms />
            <Text style={styles.info}>{user.email}</Text>
          </View>
          <View style={styles.infoBox}>
            <Call />
            <Text style={styles.info}>{user.phoneNumber}</Text>
          </View>
          <View style={styles.infoBox}>
            {user.gender == 'Female' ? <Woman size="32" /> : <Man size="32" />}
            <Text style={styles.info}>{user.gender}</Text>
          </View>
          <View style={styles.infoBox}>
            <Calendar />
            <Text style={styles.info}>{user.age}</Text>
          </View>
        </View>
        <View style={{marginTop: 40}}>
          <Button
            title={'Update User'}
            onPress={() => navigation.navigate(UPDATEUSER, {user: user})}
          />
          <Button
            title={'Delete User'}
            status={'error'}
            onPress={handleDelete}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default UserDetailScreen;

const styles = StyleSheet.create({
  containertwo: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 200,
    borderBottomWidth: 0.5,
    borderColor: themeColors.DARK,
  },

  userImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  letters: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 23,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    color: themeColors.BLACK,
  },
  infoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
    gap: 15,
    marginTop: 10,
  },
  info: {
    fontSize: 20,
    color: themeColors.BLACK,
    fontWeight: '500',
  },
});
