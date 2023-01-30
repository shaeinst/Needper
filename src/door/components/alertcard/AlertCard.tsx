import {Image, Text, View} from 'react-native';
import {ProcedureButton as ProcedureButton, DeclineHelpButton, Colors} from '../..';
import Styles from './stylesAlertCard';

interface propsInterface {
    postTitle: string;
    profileUrl: string;
    name: string;
}

const AlertCard = (props: propsInterface) => {
    const {postTitle, profileUrl, name} = props;

    const handleAccept = () => {
        return;
    };

    const handleDecline = () => {
        return;
    };

    const colors = Colors()
    const styles = Styles(colors)

    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    source={{uri: profileUrl}}
                    style={styles.profile_picture}
                />
                <Text style={styles.profile_name}>{name}</Text>
            </View>
            <View style={styles.buttons}>
                <View>
                    <DeclineHelpButton
                        text="Decline help"
                        onPress={handleDecline}
                    />
                </View>
                <View>
                    <ProcedureButton
                        text="Accept help"
                        onPress={handleAccept}
                    />
                </View>
            </View>
            <Text style={styles.hint}>From Post: {postTitle}</Text>
        </View>
    );
};

export default AlertCard;
