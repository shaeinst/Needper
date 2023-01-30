import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {AlertCard} from '../../..';
import Styles from './stylesAlert';

const alerts = [
    {
        name: 'Some One',
        profileUrl: 'https://thispersondoesnotexist.com/image',
        postTitle:
            'I need help. please help me. you can help me by subscribing my youtube channel.',
    },
    {
        name: 'Santosh Sha',
        profileUrl: 'https://thispersondoesnotexist.com/image',
        postTitle: 'Ineed help',
    },
    {
        name: 'One Man Army',
        profileUrl: 'https://thispersondoesnotexist.com/image',
        postTitle: 'Ineed help',
    },
    {
        name: 'Two Many Army',
        profileUrl: 'https://thispersondoesnotexist.com/image',
        postTitle: 'Ineed help',
    },
];

const Alert = () => {
    const noOfAlerts = alerts.length;
    const styles = Styles();

    return (
        <View>
            <Text style={styles.hint}>
                {noOfAlerts} helpers want to help you
            </Text>
            <FlatList
                style={styles.container}
                showsVerticalScrollIndicator={false}
                data={alerts}
                // since we need blank whitespace to show all alerts card, add extra item at last and make it whitespace
                ListFooterComponent={() => (
                    <View style={styles.whitespace}></View>
                )}
                renderItem={({item}) => {
                    if (item.name === 'whitespace')
                        return <View style={styles.whitespace}></View>;
                    return (
                        <View style={styles.card}>
                            <AlertCard
                                name={item.name}
                                profileUrl={item.profileUrl}
                                postTitle={item.postTitle}
                            />
                        </View>
                    );
                }}
            />
        </View>
    );
};

export default Alert;
