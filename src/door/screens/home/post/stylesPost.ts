import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../..';

const {height} = Dimensions.get('window');

const Styles = () => {
    const colors = Colors();

    return StyleSheet.create({
        container: {
            // backgroundColor: '#09f',
            backgroundColor: colors.background,
            flex: 1,
        },
        post_button: {
            width: 100,
            alignSelf: 'flex-end',
            margin: 10,
        },
        body: {
            backgroundColor: colors.background,
            paddingHorizontal: 12,
            borderRadius: 10,
            elevation: 2,
            shadowColor: colors.shadow,
            marginVertical: 2,
        },

        title: {
            flexWrap: 'wrap',
            fontWeight: '500',
            fontSize: 20,
            color: colors.textPrimary,
        },
        title_length: {
            marginTop: -5,
            marginBottom: 10,
            color: '#aaaaaa',
            fontWeight: '500',
        },
        description: {
            // backgroundColor: '#f00999',
            fontWeight: '500',
            fontSize: 16,
            color: colors.textPrimary,
            height: height / 3,
        },
        tag_container: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginHorizontal: 10,
        },
        tag: {
            // color: '#666666',
            color: '#DB9999',
            marginRight: 8,
            paddingHorizontal: 10,
            marginVertical: 2,
            borderColor: '#DB9999',
            borderWidth: 1,
            borderRadius: 10,
        },

        tag_input: {
            fontSize: 14,
            color: '#DB9999',
        },
        text: {
            color: colors.textPrimary,
        },
        whitespace: {
            width: '100%',
            height: 200,
        },
    });
};

export default Styles;
