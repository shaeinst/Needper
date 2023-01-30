import React, {forwardRef, useState, memo, useEffect} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';
import {
    PrimaryButton,
    RootState,
    routerNames,
    SecondaryButton,
    StylesCard,
} from '../../..';
import styles from './stylesOtp';

const Otp = forwardRef(() => {
    const [otpCode, setOtpCode] = useState<string>();
    const navigation = useNavigation<any>();
    const [confirm, setConfirm] = useState<any>(null);
    const [error, setError] = useState(true);

    const stylesCard = StylesCard()

    const userDetails = useSelector((state: RootState) => state.user.value);
    const mobileNumber = userDetails.mobileNumber;
    const countryDialCode = userDetails.countryDialCode;

    const signInWithPhoneNumber = async () => {
        const phoneNumber = `${countryDialCode}${mobileNumber}`;
        try {
            const confirmation: any = await auth().signInWithPhoneNumber(
                phoneNumber,
            );
            setConfirm(confirmation);
            setError(false);
        } catch (error: any) {
            setError(true);
            console.log('----- error in signInWithPhoneNumber -----');
            console.log(error);
            console.log('------------------------------');
            Alert.alert(error);
        }
    };

    const handleVerification = async () => {
        console.log('------- verifying OTP --------');

        // check if entered OTP in exactly 6
        if (otpCode?.length === 6) {
            console.log('----- OTP is not valid -----');
            Alert.alert('enter all 6 OTPs');
            return;
        }

        try {
            await confirm.confirm(otpCode);
        } catch (error: any) {
            console.log('----- error in verifying -----');
            console.log(error);
            console.log('------------------------------');
            Alert.alert(error);
        }
    };

    const handleGoBack = () => {
        navigation.navigate({
            name: routerNames.MOBILENUMBER,
        });
    };

    useEffect(() => {
        signInWithPhoneNumber();
    }, []);

    return (
        <View style={styles.container}>
            <View style={stylesCard.card}>
                <Text style={styles.message}>Verify OTP</Text>
                <View style={styles.otp}>
                    {/* ----------- third party library for OTP ------------ */}
                    <OTPInputView
                        pinCount={6}
                        code={otpCode}
                        onCodeChanged={code => setOtpCode(code)}
                        autoFocusOnLoad={false} // enabling this cause keyboard not open
                        editable={true}
                        codeInputFieldStyle={styles.otp_input_filed}
                        codeInputHighlightStyle={styles.otp_input_highlight}
                        style={styles.otp_input}
                    />
                </View>
                <View style={styles.hint}>
                    <Text style={styles.hint_msg}>didn't get OTP? </Text>
                    <TouchableOpacity onPress={signInWithPhoneNumber}>
                        <Text style={styles.hint_resend}> Resend it </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <View style={{flex: 1, marginRight: 16}}>
                        <SecondaryButton text="Back" onPress={handleGoBack} />
                    </View>
                    <View style={{flex: 1}}>
                        <PrimaryButton
                            text="Submit"
                            onPress={handleVerification}
                            disabled={error}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
});

export default memo(Otp);
