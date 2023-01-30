import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
    HomeIcon,
    AddPostIcon,
    NotificationIcon,
    ProfileIcon,
    HomepageScreen,
    PostScreen,
    AlertScreen,
    ProfileScreen,
    routerNames,
    Colors,
} from '..';
import Styles from './stylesIndex';

const ActiveIcon = ({icon}: {icon: any}): React.ReactElement => {
    const fill = '#8B93D7';
    const styles = Styles();

    return (
        <View style={styles.active_icon}>
            <View style={styles.icon}>{React.cloneElement(icon, {fill})}</View>
            <View style={styles.active_icon_shadow}></View>
        </View>
    );
};

const HomeStack = createBottomTabNavigator();
const StackScreen = (name: string, component: any, icon: any) => {
    const title = name === routerNames.HOMEPAGE ? 'Needper' : name;
    const colors = Colors();

    return (
        <HomeStack.Screen
            name={name}
            component={component}
            options={{
                title: title,
                headerTintColor: colors.primary,
                headerStyle: {
                    backgroundColor: colors.background,
                },
                tabBarIcon: ({focused}) =>
                    focused ? <ActiveIcon icon={icon} /> : icon,
                headerShadowVisible: false,
                tabBarHideOnKeyboard: true, // hide navigation bar when keyboard in opened
                // headerShown: title !== routerNames.POST, // don't show header in Post page
            }}
        />
    );
};

const RouteHome = () => {
    const colors = Colors();
    const styles = Styles();

    return (
        <HomeStack.Navigator
            initialRouteName={routerNames.HOMEPAGE}
            screenOptions={() => ({
                tabBarActiveTintColor: '#8B93D7',
                headerShown: true,
                tabBarShowLabel: false,
                tabBarStyle: styles.navbar, // styling Navbar
            })}>
            {StackScreen(
                routerNames.HOMEPAGE,
                HomepageScreen,
                <HomeIcon stroke={colors.iconPrimary} />,
            )}
            {StackScreen(
                routerNames.POST,
                PostScreen,
                <AddPostIcon stroke={colors.iconPrimary} />,
            )}
            {StackScreen(
                routerNames.ALERT,
                AlertScreen,
                <NotificationIcon stroke={colors.iconPrimary} />,
            )}
            {StackScreen(
                routerNames.PROFILE,
                ProfileScreen,
                <ProfileIcon stroke={colors.iconPrimary} />,
            )}
        </HomeStack.Navigator>
    );
};

export default RouteHome;
