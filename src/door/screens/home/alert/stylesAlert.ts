import {StyleSheet} from 'react-native';
import {Colors} from '../../..';

const Styles = () => {
    const colors = Colors();

    return StyleSheet.create({
        container: {
            // backgroundColor: "#09f",
            backgroundColor: colors.background,
            paddingHorizontal: 5,
        },

        card: {
            backgroundColor: colors.background,
            marginVertical: 10,
            marginHorizontal: 10,
            borderRadius: 12,

            shadowColor: colors.shadow,
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 1,
            shadowRadius: 12,

            elevation: 6,
        },

        hint: {
            color: '#656fc9',
            backgroundColor: colors.background,
            fontSize: 16,
            fontWeight: '400',
            paddingBottom: 1,
            textAlign: 'center',
        },
        whitespace: {
            height: 200,
            width: '100%',
        },
    });
};
export default Styles;
