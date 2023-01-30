import React, {FC} from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

interface Props {
    text: string;
    disabled?: boolean;
    onPress: () => void;
}

const Button: FC<Props> = ({text, onPress, disabled}) => {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={onPress}
            disabled={disabled ? true : false}>
            <Text style={[styles.buttonText, disabled && styles.disabled]}>
                {text}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        borderColor: '#999999',
        borderWidth: 1,
        backgroundColor: '#8B93D7',
        paddingTop: 5,
        paddingBottom: 5,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 20,
        textAlign: 'center',
    },
    disabled: {
        backgroundColor: '#999999',
    },
});

export default Button;
