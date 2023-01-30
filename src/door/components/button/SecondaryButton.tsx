import React, {FC} from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

interface Props {
    text: string;
    onPress: () => void;
}

const Button: FC<Props> = ({text, onPress}) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        borderColor: '#999999',
        borderWidth: 1,
        // backgroundColor: '#8B93D7',
        paddingTop: 5,
        paddingBottom: 5,
    },
    buttonText: {
        color: '#000000',
        fontSize: 20,
        textAlign: 'center',
    },
});

export default Button;
