import {StyleSheet} from 'react-native';
import {Colors} from '..';

const Styles = () => {
    const colors = Colors();

    return StyleSheet.create({
        navbar: {
            height: 52,
            backgroundColor: colors.background,
        },
        active_icon: {
            alignItems: 'center',
        },
        icon: {
            borderColor: colors.iconPrimary,
            backgroundColor: colors.background,
            borderRadius: 100,
            borderWidth: 1,
            padding: 6,
            zIndex: 100,
        },
        active_icon_shadow: {
            backgroundColor: colors.iconPrimary,
            width: 44,
            height: 44,
            borderRadius: 100,
            position: 'absolute',
            top: 1,
            left: 2,
        },
        active_label: {
            color: '#000000',
        },
    });
};
export default Styles;
