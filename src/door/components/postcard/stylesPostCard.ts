import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../..';

const {height} = Dimensions.get('window');

const Styles = () => {
    const colors = Colors();
    return StyleSheet.create({
        container: {
            // backgroundColor: '#f0f567',
            backgroundColor: colors.background,
            paddingHorizontal: '3%',
            paddingVertical: 12,
            borderRadius: 12,
        },

        header: {
            // backgroundColor: "#055005",
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'flex-start',
            width: '100%',
            justifyContent: 'space-between',
        },
        body: {
            width: '100%',
        },
        profile: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        profile_picture: {
            width: 60,
            height: 60,
            resizeMode: 'contain',
            borderRadius: 100,
            borderColor: colors.borderPrimary,
            borderWidth: 2,
        },
        profile_details: {
            marginLeft: 8,
        },
        location: {
            fontWeight: '300',
            fontSize: 12,
            color: colors.textPrimary,
        },
        profile_name: {
            fontSize: 16,
            fontWeight: '600',
            color: colors.textPrimary,
        },
        tag_critical: {
            fontWeight: '400',
            fontSize: 14,
            color: colors.critical,
            borderRadius: 2,
            borderWidth: 1,
            borderColor: colors.critical,
            paddingHorizontal: 6,
        },
        header_title: {
            color: colors.textPrimary,
            fontSize: 16,
            fontWeight: '400',
            marginTop: 16,
        },
        tags: {
            flexDirection: 'row',
            flexWrap: 'wrap',
        },
        tag: {
            fontWeight: '400',
            fontSize: 16,
            color: colors.critical,
            marginRight: 4,
            marginTop: 5,
        },
        post_image_url: {
            backgroundColor: colors.foreground,
            resizeMode: 'contain',
            alignSelf: 'center',
            width: '100%',
            height: height / 3.6,
            borderRadius: 12,
        },
        options: {
            // backgroundColor:"#ff0",
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
        },
        total_helper: {
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 6,
            marginLeft: 4,
        },

        total_helper_text: {
            fontWeight: '400',
            fontSize: 12,
            color: colors.textPrimary,
            marginLeft: 8,
        },
        option: {
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 10,
        },
        option_text: {
            fontWeight: '500',
            fontSize: 14,
            color: colors.textCardShare,
            marginLeft: 4,
        },
    });
};

export default Styles;
