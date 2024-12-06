import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  compareNameSurname,
  getFirsLetterNameSurname,
  getRandomColor,
} from '../../utils/functions';
import themeColors from '../../theme/themeColors';
import {ArrowRight} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import {USERDETAIL} from '../../utils/route';

const UserCard = ({user}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate(USERDETAIL, {user})}>
      <View>
        <View style={[styles.userImage, {backgroundColor: getRandomColor()}]}>
          <Text style={styles.letters}>
            {getFirsLetterNameSurname(user.name, user.surname)}
          </Text>
        </View>
      </View>
      <View style={{padding: 10, flex: 1}}>
        <Text style={styles.name}>
          {compareNameSurname(user.name, user.surname)}
        </Text>
        <Text style={styles.name}>{user.email}</Text>
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <ArrowRight size={25} color={themeColors.BLACK} />
      </View>
    </Pressable>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    elevation: 5,
    gap: 5,
    marginVertical: 7,
  },
  userImage: {
    width: 80,
    height: 80,
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
    fontWeight: 'bold',
    fontSize: 18,
    color: themeColors.BLACK,
    marginBottom: 5,
  },
});
