import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export interface deviceStateInterface {
    screenWidth: number;
    screenHeight: number;
}

const initialState: deviceStateInterface = {
    screenWidth: width,
    screenHeight: height,
};

export const deviceSlice = createSlice({
    name: 'device',
    initialState: initialState,
    reducers: {
        updateScreenDimensions: (
            state,
            action: PayloadAction<deviceStateInterface>,
        ) => {
            state.screenWidth = action.payload.screenWidth;
            state.screenHeight = action.payload.screenHeight;
        },
    },
});

export const {updateScreenDimensions: updateScreen} = deviceSlice.actions;
export default deviceSlice.reducer;
