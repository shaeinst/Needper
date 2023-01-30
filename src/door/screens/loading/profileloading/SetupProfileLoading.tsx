import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import styles from './stylesSetupProfileLoading';

const LoadingSpinner = () => {
    return <ActivityIndicator size="large" />;
};

const SetupProfileLoading = () => {
    return (
        <View style={styles.container}>
            <View style={styles.msg_container}>
                <Text style={styles.msg}>setting up your Proile</Text>
            </View>
            <View style={styles.loading}>
                <LoadingSpinner />
            </View>
        </View>
    );
};
export default SetupProfileLoading;
