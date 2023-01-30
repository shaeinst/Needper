import React from 'react';
import {Svg, G, Path} from 'react-native-svg';

type Props = {
    fill?: string;
    stroke?: string;
};

const AddPost = (props: Props) => (
    <Svg width="28" height="28" viewBox="0 0 24 24" fill="none" {...props}>
        <G fill={props.stroke ? props.stroke : '#000100'}>
            <Path d="m11.98487,23.9685c-6.60192,0 -11.97214,-5.34392 -11.97214,-11.91349s5.37022,-11.91349 11.97214,-11.91349s11.97214,5.34392 11.97214,11.91349s-5.37022,11.91349 -11.97214,11.91349zm0,-21.92082c-5.5455,0 -10.0566,4.489 -10.0566,10.00733s4.5111,10.00733 10.0566,10.00733s10.0566,-4.48996 10.0566,-10.00733s-4.5111,-10.00733 -10.0566,-10.00733z" />
            <Path d="m12.10217,19.11366a1,1 0 0 1 -1,-1l0,-12a1,1 0 0 1 2,0l0,12a1,1 0 0 1 -1,1z" />
            <Path d="m18.27812,13.23096l-12,0a1,1 0 0 1 0,-2l12,0a1,1 0 0 1 0,2z" />
        </G>
    </Svg>
);

export default AddPost;
