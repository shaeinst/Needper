import {StyleSheet} from 'react-native';
import {ColorsState} from '../..';

const Styles = (colors: ColorsState) => {
    return StyleSheet.create({
        container: {
            // backgroundColor: "#ff6666",
            paddingVertical: 14,
            paddingHorizontal: '10%',
        },

        profile: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
        },

        profile_name: {
            fontSize: 16,
            fontWeight: '600',
            color: colors.textPrimary,
            marginLeft: 10,
        },
        profile_picture: {
            width: 60,
            height: 60,
            resizeMode: 'contain',
            borderRadius: 100,
            borderColor: colors.borderPrimary,
            borderWidth: 2,
        },

        buttons: {
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        hint: {
            color: '#8B929B',
            fontSize: 11,
            fontWeight: '400',
            marginTop: 8,
            marginBottom: -6,
        },
    });
};

export default Styles;
