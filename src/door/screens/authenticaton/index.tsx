import React from 'react';
import {View} from 'react-native';
import {RouteAuthentication} from '../..';
import styles from './stylesIndex';

const Authentication = () => {
    return (
        <View style={styles.container}>
            <RouteAuthentication />
        </View>
    );
};

export default Authentication;
