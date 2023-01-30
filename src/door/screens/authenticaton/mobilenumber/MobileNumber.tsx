import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';

import styles from './stylesMobileNumber';
import {
    ArrowDownIcon,
    CountryList,
    PrimaryButton,
    RootState,
    routerNames,
    StylesCard,
    updateUser,
} from '../../../';

const MobileNumber = () => {
    const [showCountryList, setShowCountryList] = useState(false); // variable to control whether to show the list or not
    const [warnMessage, setWarnMessage] = useState('');
    const navigation = useNavigation<any>();

    const stylesCard = StylesCard()

    const dispatch = useDispatch();
    const userDetails = useSelector((state: RootState) => state.user.value);
    const mobileNumber = userDetails.mobileNumber;
    const countryName = userDetails.countryName;
    const countryDialCode = userDetails.countryDialCode;

    const handleSendOTP = () => {
        if (countryDialCode === '+XXX') {
            setWarnMessage('select Country Dial Code');
            return;
        }
        if (!mobileNumber || mobileNumber.length < 7) {
            setWarnMessage('Mobile Number is not valid');
            return;
        } else setWarnMessage('');

        // if validaion is passed, goto otp screen and handle otp
        navigation.navigate({name: routerNames.OTP});
    };

    return (
        <>
            {showCountryList ? (
                <CountryList
                    show={[showCountryList, setShowCountryList]}
                    details={setWarnMessage}
                />
            ) : (
                <View style={styles.container}>
                    <Text style={styles.warn_message}>{warnMessage}</Text>
                    <View style={stylesCard.card}>
                        <Text style={styles.message}>
                            Enter your mobile number
                        </Text>
                        <View style={[styles.number]}>
                            <View style={styles.inputfield}>
                                <TouchableOpacity
                                    style={styles.code}
                                    onPress={() =>
                                        setShowCountryList(!showCountryList)
                                    }>
                                    <Text style={styles.countrycode}>
                                        {countryDialCode}
                                    </Text>
                                    <ArrowDownIcon fill="#000000" />
                                </TouchableOpacity>

                                <TextInput
                                    maxLength={11}
                                    keyboardType="numeric"
                                    placeholder="xxx xxx xxxx"
                                    placeholderTextColor="#aaaaaa"
                                    value={mobileNumber}
                                    style={styles.mobilenumber}
                                    onChangeText={text =>
                                        dispatch(
                                            updateUser({mobileNumber: text}),
                                        )
                                    }
                                />
                            </View>
                            <Text style={styles.countryname}>
                                {countryName}
                            </Text>
                        </View>
                        <PrimaryButton text="Next" onPress={handleSendOTP} />
                    </View>
                </View>
            )}
        </>
    );
};

export default MobileNumber;
