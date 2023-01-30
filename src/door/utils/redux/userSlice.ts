import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface userStateInterface {
    name?: string;
    age?: number | null;
    mobileNumber?: string;
    countryName?: string;
    countryDialCode?: string;
    profilePicture?: string;
    address?: string;
}

const initialState: userStateInterface = {
    name: '',
    age: null,
    mobileNumber: '',
    countryName: '',
    countryDialCode: '+XXX',
    profilePicture: '',
    address: '',
};

export const userSlice = createSlice({
    name: 'user',
    initialState: {value: initialState},
    reducers: {
        updateUser: (state, action: PayloadAction<userStateInterface>) => {
            // update the fields of the value object with the corresponding values in the payload object, if they exist.
            state.value = Object.assign({}, state.value, action.payload);
        },
    },
});

export const {updateUser} = userSlice.actions;
export default userSlice.reducer;
