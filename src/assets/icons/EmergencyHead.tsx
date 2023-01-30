import React from 'react';
import {Svg, Path} from 'react-native-svg';

type Props = {
    fill?: string;
};

const EmergencyHead = (props: Props) => (
    <Svg width="22" height="17" viewBox="0 0 22 17" fill="none" {...props}>
        <Path
            d="M4 17V15H5.6L7.575 8.425C7.70833 7.99167 7.954 7.64567 8.312 7.387C8.67067 7.129 9.06667 7 9.5 7H12.5C12.9333 7 13.3293 7.129 13.688 7.387C14.046 7.64567 14.2917 7.99167 14.425 8.425L16.4 15H18V17H4ZM7.7 15H14.3L12.5 9H9.5L7.7 15ZM10 5V0H12V5H10ZM15.95 7.475L14.525 6.05L18.075 2.525L19.475 3.925L15.95 7.475ZM17 12V10H22V12H17ZM6.05 7.475L2.525 3.925L3.925 2.525L7.475 6.05L6.05 7.475ZM0 12V10H5V12H0Z"
        />
    </Svg>
);

export default EmergencyHead;
