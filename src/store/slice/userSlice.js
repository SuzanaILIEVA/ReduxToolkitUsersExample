import {createSlice} from '@reduxjs/toolkit';
import {Alert} from 'react-native';

const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addNewUser: (state, action) => {
      state.users = [...state.users, action.payload];
      Alert.alert('Successfully added', 'User added successfully');
    },

    deleteUser: (state, action) => {
      const filtredUser = state.users.filter(
        user => user.id !== action.payload.id,
      );
      state.users = filtredUser;
      Alert.alert('Successfully deleted', 'User deleted successfully');
    },

    updateUser: (state, action) => {
      const updatedUser = state.users.map(user =>
        user?.id === action.payload.id ? {...user, ...action.payload} : user,
      );

      state.users = updatedUser;

      Alert.alert('Successfully Updated', 'User updated successfully');
    },
  },
});

export const {addNewUser, deleteUser, updateUser} = userSlice.actions;
export default userSlice.reducer;
