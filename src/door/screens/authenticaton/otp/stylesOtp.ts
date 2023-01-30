import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#00ffff',
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        paddingHorizontal: "4%",
    },
    message: {
        color: '#000000',
        fontSize: 16,
    },
    otp: {
        marginTop: 16,
    },

    otp_input: {
        width: '100%',
        height: 50,
    },
    otp_input_filed: {
        color: "#000000",
        fontSize: 20,
        borderRadius: 8,
        borderColor: "#000000",
    },
    otp_input_highlight: {
        borderColor: "#646FC9"
    },

    otp_item: {
        borderColor: '#000000',
        color: '#000000',
        textAlign: 'center',
        fontSize: 16,
        borderWidth: 1,
        borderRadius: 10,
        margin: 4,
        paddingHorizontal: 10,
        paddingVertical: 6,
    },
    hint: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 8,
    },
    hint_msg: {
        fontSize: 12,
        color: '#000000',
    },
    hint_resend: {
        color: '#1126DE',
        fontSize: 12,
    },
    button: {
        // backgroundColor: "#034555",
        flexDirection: 'row',
        marginTop: 32,
    },
});

export default styles;
