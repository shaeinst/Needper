import React from 'react';
import {ScrollView, Text} from 'react-native';
import Styles from './stylesProfile';

const Profile = () => {
    const styles = Styles();
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.container}>
            <Text style={styles.text}>Profile</Text>
        </ScrollView>
    );
};

export default Profile;
