import React, {useEffect, useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {PrimaryButton, SecondaryButton, StylesCard} from '../../..';
import styles from './stylesUsername';

const Username = () => {
    const [userName, setUserName] = useState('');

    const stylesCard = StylesCard()

    const handleUsername = (name: string) => {
        setUserName(name);
    };

    useEffect(() => {
        console.log(userName);
    }, [userName]);

    return (
        <View style={[styles.container, stylesCard.card]}>
            <Text style={styles.message}>Enter your Name</Text>
            <TextInput
                style={styles.username}
                placeholder="full name"
                keyboardType="default"
                maxLength={30}
                onChangeText={text => handleUsername(text)}
            />
            <View style={styles.button}>
                <View style={{flex: 1, marginRight: 16}}>
                    <SecondaryButton text="Back" />
                </View>
                <View style={{flex: 1}}>
                    <PrimaryButton text="Next" />
                </View>
            </View>
        </View>
    );
};

export default Username;
