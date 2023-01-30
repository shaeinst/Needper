import React, {useEffect, useState} from 'react';
import { StatusBar, View} from 'react-native';
import {Provider} from 'react-redux';
import {Colors, reduxStore, Router} from './door';
import styles from './stylesApp';

const App = () => {
    const [isAppLaunching, setIsAppLaunching] = useState(true);
    const [isUserSignedUp, setIsUserSignedUp] = useState(true);

    const colors = Colors()

    const loadApp = async () => {
        // Load app data or perform some other async operation
        // Set isLoading to false once the app has finished loading
        setIsAppLaunching(false);
    };

    useEffect(() => {
        loadApp();
    }, []);

    return (
        <Provider store={reduxStore}>
            <StatusBar translucent backgroundColor={colors.StatusBar} />
            <View style={styles.container}>
                <Router />
            </View>
        </Provider>
    );
};

export default App;
