import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LaunchLoadingScreen, routerNames} from '..';
import RouteAuthentication from './RouteAuthentication';
import RouteHome from './RouteHome';

const RouterStack = createStackNavigator();

const Router = () => {
    const state = {
        isLoading: false, // We haven't finished checking for the token yet
        userToken: true,  // we got token?
        isSignout: true,
    };

    return (
        /**
            when user is logout, RouteAuthentication will be invoked
            else RouteHome will be invoked. this will prevent user entering
            signup after being signed up
        */
        <NavigationContainer>
            <RouterStack.Navigator>
                {state.isLoading ? (
                    // We haven't finished checking for the token yet
                    <RouterStack.Screen
                        name={routerNames.LOADINGAPP}
                        component={LaunchLoadingScreen}
                        options={{headerShown: false}}
                    />
                ) : !state.userToken ? (
                    // No token found, user isn't signed in
                    <RouterStack.Screen
                        name={routerNames.AUTHENTICATION}
                        component={RouteAuthentication}
                        options={{
                            headerShown: false,
                            animationTypeForReplace: state.isSignout
                                ? 'pop'
                                : 'push',
                        }}
                    />
                ) : (
                    // User is signed in
                    <RouterStack.Screen
                        name={routerNames.HOME}
                        component={RouteHome}
                        options={{
                            headerShown: false,
                        }}
                    />
                )}
            </RouterStack.Navigator>
        </NavigationContainer>
    );
};
export default Router;
