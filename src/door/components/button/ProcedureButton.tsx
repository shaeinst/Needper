import {StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {PeaceIcon} from '../..';

interface propsInterface {
    text: string;
    onPress: () => void;
}

const Button = (props: propsInterface) => {
    const {text, onPress} = props;
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <PeaceIcon fill="#ffffff" />
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#646FC9',

        flexDirection: 'row',
        paddingVertical: 7,
        paddingHorizontal: 8,
        justifyContent: 'center',
        alignItems: 'center',

        borderRadius: 5,
        shadowColor: 'rgba(0, 0, 0, 0.15)',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    text: {
        fontWeight: '400',
        fontSize: 16,
        color: '#DCE8F9',
        marginLeft: 10,
    },
});

export default Button;
