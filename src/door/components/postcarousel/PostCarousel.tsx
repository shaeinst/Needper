import * as React from 'react';
import {Text, View} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import styles from './stylesCarousel';

const PostCarousel = () => {
    const width = 100;
    return (
        <View style={styles.container}>
            <Carousel
                loop
                width={width}
                height={width / 2}
                autoPlay={true}
                data={[...new Array(6).keys()]}
                scrollAnimationDuration={1000}
                onSnapToItem={index => console.log('current index:', index)}
                renderItem={({index}) => (
                    <View
                        style={{
                            flex: 1,
                            borderWidth: 1,
                            justifyContent: 'center',
                        }}>
                        <Text style={{textAlign: 'center', fontSize: 30}}>
                            {index}
                        </Text>
                    </View>
                )}
            />
        </View>
    );
};

export default PostCarousel;
