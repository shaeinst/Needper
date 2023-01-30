import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        paddingHorizontal: "4%",
    },

    warn_message: {
        color: '#ff6666',
        marginBottom: 10,
        textAlign: "center",
    },

    message: {
        fontSize: 16,
        color: '#000000',
    },

    inputfield: {
        // backgroundColor: "#f0f",
        minWidth: "100%",
        flexDirection: 'row',
        paddingHorizontal: "10%"
    },

    number: {
        // backgroundColor: '#f09222',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#aaaaaa',
        alignItems: 'center',
        paddingVertical: 6,
        marginBottom: 20,
        marginTop: 10,
    },

    code: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    countrycode: {
        fontSize: 18,
        color: '#000000',
    },

    countryname: {
        // backgroundColor: "#f01344",
        fontSize: 10,
        marginTop: -10,
        color: '#000000',
    },

    mobilenumber: {
        // backgroundColor: 'red',
        fontSize: 20,
        color: '#000000',
    },

    nextbutton: {
        borderRadius: 20,
    },
});

export default styles;
