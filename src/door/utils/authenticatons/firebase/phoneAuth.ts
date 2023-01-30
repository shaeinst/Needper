import {useState} from 'react';
import auth from '@react-native-firebase/auth';

interface propsInterface {
    phoneNumber: string;
    otp: number;
}

const PhoneAuth = (props: propsInterface) => {
    const {otp, phoneNumber} = props
    // If null, no SMS has been sent
    const [confirm, setConfirm] = useState<any>(null);
    const [result, setResult] = useState<any>(null)


    // send OTP to phone number
    const signInWithPhoneNumber = async () => {
        const confirmation: any = await auth().signInWithPhoneNumber(
            phoneNumber,
        );
        setConfirm(confirmation);
    };

    // confirm if entred OTP is correct
    const confirmCode = async () => {
        try {
            if (confirm) {
                await confirm.confirm(otp) && setResult(true);
            }
        } catch (error) {
            setResult(error)
        }
    };

    return result
};

export default PhoneAuth;
