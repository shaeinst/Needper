import React from 'react';
import {Svg, Path} from 'react-native-svg';

type Props = {
    fill?: string;
};

const ArrowDown = (props: Props) => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="#aaaaaa" {...props}>
        <Path
            d="M16.9,9.2c-0.4-0.4-1-0.4-1.4,0L12,12.7L8.5,9.2c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l4.2,4.2c0.2,0.2,0.4,0.3,0.7,0.3
	c0.3,0,0.5-0.1,0.7-0.3l4.2-4.2C17.3,10.2,17.3,9.6,16.9,9.2z"
        />
    </Svg>
);

export default ArrowDown;
