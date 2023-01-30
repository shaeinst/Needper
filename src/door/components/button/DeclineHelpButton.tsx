import {StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface propsInterface {
    text: string;
    onPress: () => void;
}

const Button = (props: propsInterface) => {
    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 5,
        paddingHorizontal: 8,
        justifyContent: 'center',
        alignItems: 'center',

        borderRadius: 5,
        borderColor: '#DB5C5C',
        borderWidth: 1,
    },
    text: {
        fontWeight: '400',
        fontSize: 16,
        color: '#DB5C5C',
    },
});

export default Button;
