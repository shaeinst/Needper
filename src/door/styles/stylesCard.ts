import {StyleSheet} from 'react-native';
import {Colors, ColorsState} from '..';

const Styles = () => {
    const colors = Colors();
    return StyleSheet.create({
        card: {
            // backgroundColor: '#ff00ff',
            borderColor: '#aaaaaa',
            borderWidth: 1,
            borderRadius: 20,
            paddingHorizontal: '8%',
            paddingVertical: '6%',
        },

        postCard: {
            shadowColor: colors.shadow,
            elevation: 4,
        },
    });
};
export default Styles;
