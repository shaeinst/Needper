import {StyleSheet} from 'react-native';
import {ColorsState} from '../../..';

const Styles = (colors: ColorsState) => {
    return StyleSheet.create({
        container: {
            // backgroundColor: '#09f',
            backgroundColor: colors.background,
            flex: 1,
        },
        text: {
            color: colors.textPrimary,
        },
        post: {
            marginVertical: '5%',
            marginHorizontal: '2%',
        },
        whitespace: {
            width: '100%',
            height: 200,
        },
    });
};

export default Styles;
