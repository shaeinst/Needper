import React from 'react';
import {FlatList, View} from 'react-native';
import {Colors, PostCard} from '../../..';
import Styles from './stylesHomepage';

const helpPosts = [
    {
        name: 'Samir Aryan',
        postTitle:
            'I need help. Please help me. you can help me by subscribing my youtube channel.',
        profileUrl: 'https://thispersondoesnotexist.com/image',
        info: 'Biratnagar, 11 sep',
        criticalTag: 'critical',
        tags: ['tag1', 'tag2', 'tag3'],
        totalHelper: 3,
        postImageUrl: ['https://picsum.photos/800'],
    },
    {
        name: 'Samir Aryan',
        postTitle:
            'I need help. Please help me. you can help me by subscribing my youtube channel.',
        profileUrl: 'https://thispersondoesnotexist.com/image',
        info: 'Biratnagar, 11 sep',
        criticalTag: 'critical',
        tags: ['tag1', 'tag2', 'tag3'],
        totalHelper: 3,
        postImageUrl: ['https://picsum.photos/800'],
    },
];

const Homepage = () => {
    const colors = Colors();
    const styles = Styles(colors);

    return (
        <FlatList
            style={styles.container}
            showsVerticalScrollIndicator={false}
            data={helpPosts}
            // since we need blank whitespace to show all alerts card, add extra item at last and make it whitespace
            ListFooterComponent={() => <View style={styles.whitespace}></View>}
            renderItem={({item}) => {
                return (
                    <View style={styles.post}>
                        <PostCard
                            name={item.name}
                            postTitle={item.postTitle}
                            profileUrl={item.profileUrl}
                            info={item.info}
                            criticalTag={item.criticalTag}
                            tags={item.tags}
                            totalHelper={item.totalHelper}
                            postImageUrl={item.postImageUrl}
                        />
                    </View>
                );
            }}
        />
    );
};

export default Homepage;
