import React from 'react';
import {Text, View} from 'react-native';
import styles from './stylesLaunchLoading';

const LaunchLoading = () => {
    return (
        <View style={styles.container}>
            <View style={styles.logo}><Text>starting...</Text></View>
        </View>
    );
};

export default LaunchLoading;
