import {StyleSheet, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        minWidth: "90%",
        maxWidth: "100%",
        paddingHorizontal: "1%",
        paddingVertical: 16,
    },

    title: {
        // backgroundColor: '#001299',
        flexDirection: 'row',
    },
    title_icon: {},
    title_msg_container: {
        flex: 1,
        alignItems: "center"
    },
    title_msg: {
        color: '#000000',
        fontSize: 16,
    },

    searchField: {
        padding: 10,
        fontSize: 16,
        borderBottomColor: '#aaaaaa',
        borderBottomWidth: 1,
        marginTop: 8,
        color: "#000000",
    },

    country_container: {
        paddingTop: 16,
        paddingBottom: 16,
        width: '100%',
    },
    country: {
        // backgroundColor: '#f0f',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        paddingVertical: 10,
        // margin: 1,
    },
    country_name: {
        fontSize: 16,
        flexWrap: 'wrap',
        color: "#000000",
    },
    dial_code: {
        fontSize: 16,
        color: "#000000",
    },
});

export default styles;
