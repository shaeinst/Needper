import {StyleSheet} from 'react-native';
import {Colors} from '../../..';

const Styles = () => {
    const colors = Colors();
    return StyleSheet.create({
        container: {
            // backgroundColor: "#09f",
            backgroundColor: colors.background,
            flex: 1,
        },
        text: {
            color: colors.textPrimary,
        },
    });
};

export default Styles;
