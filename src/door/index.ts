/* ━━━━━━━━━━━━━━━━━━━━━❰ Components ❱━━━━━━━━━━━━━━━━━━━━━ */
export {default as PrimaryButton} from './components/button/PrimaryButton';
export {default as SecondaryButton} from './components/button/SecondaryButton';
export {default as ProcedureButton} from './components/button/ProcedureButton';
export {default as DeclineHelpButton} from './components/button/DeclineHelpButton';
export {default as PostCard} from './components/postcard/PostCard';
export {default as PostCarousel} from './components/postcarousel/PostCarousel';
export {default as AlertCard} from './components/alertcard/AlertCard';

/* ━━━━━━━━━━━━━━━━━━━━━━━❰ Screens ❱━━━━━━━━━━━━━━━━━━━━━━ */
export {default as LaunchLoadingScreen} from './screens/loading/launchloading/LaunchLoading';
// for Authentication
export {default as Authenticaton} from './screens/authenticaton';
export {default as MobileNumber} from './screens/authenticaton/mobilenumber/MobileNumber';
export {default as CountryList} from './screens/authenticaton/countrylist/CountryList';
export {default as Otp} from './screens/authenticaton/otp/Otp';
export {default as Username} from './screens/authenticaton/username/Username';
export {default as SetupProfileLoading} from './screens/loading/profileloading/SetupProfileLoading';
// for Home
export {default as HomepageScreen} from './screens/home/homepage/Homepage';
export {default as AlertScreen} from './screens/home/alert/Alert';
export {default as PostScreen} from './screens/home/post/Post';
export {default as ProfileScreen} from './screens/home/profile/Profile';

/* ━━━━━━━━━━━━━━━━━━━━━━━❰ Routers ❱━━━━━━━━━━━━━━━━━━━━━━━ */
export {default as Router} from './routers';
export {default as routerNames} from './routers/routerNames';

/* ━━━━━━━━━━━━━━━━━━━━━━━━❰ Redux ❱━━━━━━━━━━━━━━━━━━━━━━━━ */
export {default as reduxStore} from './utils/redux/store';
export type {RootState} from './utils/redux/store';
export {updateUser} from './utils/redux/userSlice';

/* ━━━━━━━━━━━━━━━━━━━━━❰ Authenticaton ❱━━━━━━━━━━━━━━━━━━━ */
// export {default as AuthFirebase} from './utils/authenticatons/firebase/firebase';
// export {default as PhoneAuth} from './utils/authenticatons/firebase/phoneAuth';
// export {default as firebaseConfig} from './utils/authenticatons/firebase/firebaseConfig';

/* ━━━━━━━━━━━━━━━━━━━━━━━━❰ Others ❱━━━━━━━━━━━━━━━━━━━━━━━ */
// handles
export {default as HandlePost} from './utils/handles/HandlePost';
// Styles
export {default as StylesCard} from './styles/stylesCard';
// Colors
export {default as Colors} from './theme/colors';
export type {ColorsState} from './theme/colors';
// Assets
export * from '../assets';
