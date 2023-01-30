import React from 'react';
import {Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
    EmergencyHeadIcon,
    PeaceIcon,
    PostCarousel,
    ShareIcon,
    ViewEyeIcon,
    StylesCard,
    Colors,
} from '../..';
import Styles from './stylesPostCard';

interface propsInterface {
    name: string;
    postTitle: string;
    profileUrl: string;
    info: string;
    criticalTag: string;
    tags: string[];
    totalHelper: number;
    postImageUrl: string[];
}

const PostCard = (props: propsInterface) => {
    const {
        name,
        postTitle,
        profileUrl,
        info,
        criticalTag,
        tags,
        totalHelper,
        postImageUrl,
    } = props;

    const colors = Colors();
    const styles = Styles();
    const stylesCard = StylesCard()

    return (
        <View style={[styles.container, stylesCard.postCard]}>
            {/* header */}
            <View style={styles.header}>
                {/* profile */}
                <View style={styles.profile}>
                    <Image
                        // source={require('../../../assets/images/profile_image_test.jpg')}
                        source={{
                            uri: profileUrl,
                        }}
                        style={styles.profile_picture}
                    />
                    <View style={styles.profile_details}>
                        <Text style={styles.profile_name}>{name}</Text>
                        <Text style={styles.location}>{info}</Text>
                    </View>
                </View>
                {/* critical tag */}
                {criticalTag && (
                    <Text style={styles.tag_critical}>{criticalTag}</Text>
                )}
            </View>
            {/* body */}
            <View style={styles.body}>
                {/* title */}
                <Text style={styles.header_title}>{postTitle}</Text>
                {/* tag */}
                <View style={styles.tags}>
                    {tags.map((tag: string, index: number) => {
                        return (
                            <Text key={index} style={styles.tag}>
                                #{tag}
                            </Text>
                        );
                    })}
                </View>
                {/* Media: images | vides */}
                {postImageUrl.length > 0 && (
                    <View style={styles.post_image_url}>
                        {/* <PostCarousel /> */}
                    </View>
                )}
                {/* hint */}
                <View style={styles.total_helper}>
                    <EmergencyHeadIcon fill={colors.textCardShare} />
                    <Text style={styles.total_helper_text}>
                        {totalHelper} helper offered help
                    </Text>
                </View>
            </View>
            {/* options */}
            <View style={styles.options}>
                <TouchableOpacity style={styles.option}>
                    <View>
                        <ShareIcon fill={colors.textCardShare} />
                    </View>
                    <Text style={styles.option_text}>spread</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option}>
                    <ViewEyeIcon fill={colors.textCardShare} />
                    <Text style={styles.option_text}>view post</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option}>
                    <PeaceIcon fill={colors.textCardShare} />
                    <Text style={styles.option_text}>offer help</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default PostCard;
