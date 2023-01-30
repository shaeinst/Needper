import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MobileNumber, Otp, SetupProfileLoading, Username} from '..';
import routerNames from './routerNames';

const {Navigator, Screen} = createNativeStackNavigator();

const RouteAuthentication = () => {
    return (
        <Navigator initialRouteName={routerNames.MOBILENUMBER}>
            <Screen
                name={routerNames.MOBILENUMBER}
                options={{headerShown: false}}
                component={MobileNumber}
            />
            <Screen
                name={routerNames.OTP}
                options={{headerShown: false}}
                component={Otp}
            />
            <Screen
                name={routerNames.USERNAME}
                options={{headerShown: false}}
                component={Username}
            />
            <Screen
                name={routerNames.SETUPPROFILELOADING}
                options={{headerShown: false}}
                component={SetupProfileLoading}
            />
        </Navigator>
    );
};

export default RouteAuthentication;
