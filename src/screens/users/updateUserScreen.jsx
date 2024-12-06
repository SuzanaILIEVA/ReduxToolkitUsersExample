import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import InputComp from '../../components/ui/inputComp';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import Button from '../../components/ui/button';
import {Formik} from 'formik';
import newUserSchema from '../../utils/validationSchema';
import {useDispatch, useSelector} from 'react-redux';
import {updateUser} from '../../store/slice/userSlice';
import CheckBox from 'react-native-check-box';
import themeColors from '../../theme/themeColors';

const UpdateUserScreen = () => {
  const {users} = useSelector(state => state.users);
  console.log(users);

  const dispatch = useDispatch();

  return (
    <View style={defaultScreenStyle.container}>
      <Formik
        initialValues={{
          id: users.id,
          name: users.name,
          surname: users.surname,
          email: users.email,
          phoneNumber: users.phoneNumber,
          gender: users.gender,
          age: users.age,
        }}
        validationSchema={newUserSchema}
        onSubmit={values => dispatch(updateUser(values))}>
        {({
          handleChange,
          handleSubmit,
          handleBlur,
          setFieldValue,
          errors,
          values,
        }) => (
          <ScrollView>
            <InputComp
              error={errors.name}
              title={'Name'}
              placeholder={'Please set name'}
              value={values.name}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
            />
            <InputComp
              error={errors.surname}
              title={'Surname'}
              placeholder={'Please set surname'}
              value={values.surname}
              onChangeText={handleChange('surname')}
              onBlur={handleBlur('surname')}
            />
            <InputComp
              error={errors.email}
              keyboardType={'email-address'}
              title={'Email'}
              placeholder={'Please set email'}
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
            />
            <InputComp
              error={errors.phoneNumber}
              keyboardType={'phone-pad'}
              title={'Phone Number'}
              placeholder={'Please set prhone number'}
              value={values.phoneNumber}
              onChangeText={handleChange('phoneNumber')}
              onBlur={handleBlur('phoneNumber')}
            />

            {/* gender checkbox */}
            <View>
              <Text style={styles.genderTitle}>Gender</Text>

              <View style={styles.CheckBoxcontainer}>
                <CheckBox
                  style={{flex: 1, padding: 10}}
                  isChecked={values.gender === 'Female'}
                  onClick={() => setFieldValue('gender', 'Female')}
                  leftText={'Female'}
                  leftTextStyle={{fontSize: 18, fontWeight: '500'}}
                />
                <CheckBox
                  style={{flex: 1, padding: 10}}
                  isChecked={values.gender === 'Male'}
                  onClick={() => setFieldValue('gender', 'Male')}
                  leftText={'Male'}
                  leftTextStyle={{fontSize: 18, fontWeight: '500'}}
                />
              </View>
            </View>

            <InputComp
              keyboardType={'phone-pad'}
              error={errors.age}
              title={'Age'}
              placeholder={'Please set age'}
              value={values.age}
              onChangeText={handleChange('age')}
              onBlur={handleBlur('age')}
            />

            <View style={{marginTop: 60}}>
              <Button onPress={handleSubmit} title={'Update'} />
            </View>
          </ScrollView>
        )}
      </Formik>
    </View>
  );
};

export default UpdateUserScreen;

const styles = StyleSheet.create({
  CheckBoxcontainer: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: themeColors.DARKER,
    marginTop: 5,
    borderRadius: 7,
    padding: 5,
    backgroundColor: themeColors.DARKER,
  },
  genderTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 1,
    marginLeft: 10,
    color: themeColors.BLACK,
  },
});
