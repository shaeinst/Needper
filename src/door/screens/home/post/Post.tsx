import React, {useState} from 'react';
import {ScrollView, Text, TextInput, View} from 'react-native';
import {ProcedureButton} from '../../..';
import Styles from './stylesPost';

const Post = () => {
    const [tagsValue, setTagsValue] = useState('');
    const [tagList, setTagList] = useState(['']);

    const handleTags = (text: string) => {
        setTagsValue(text);
        if (tagList.length > 1 && tagList[0] === '') {
            setTagList(preValue => [...preValue.slice(1)]);
        }
        const value = text.split('');
        if (value[value.length - 1] === ',') {
            const finalTag = value.slice(0, value.length - 1).join('');
            setTagList(preValue => [...preValue, finalTag]);
            setTagsValue('');
            console.log(tagList);
        } else {
            return;
        }
    };

    const handlePost = () => {
        console.log('POST screen: posted');
    };

    // these variavle are just for testing purose
    const title =
        'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.';
    const description =
        'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.';
    const [titleLength, setTitleLenght] = useState(0);

    const styles = Styles();

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.post_button}>
                    <ProcedureButton text="Post" onPress={handlePost} />
                </View>
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                //
            >
                <View style={styles.body}>
                    <TextInput
                        placeholder="what's your emergency?"
                        placeholderTextColor="#aaaaaa"
                        multiline={true}
                        style={styles.title}
                        maxLength={200}
                        // value={title}
                        onChangeText={text => setTitleLenght(text.length)}
                    />
                    <Text style={styles.title_length}>{titleLength} / 200</Text>
                    <TextInput
                        placeholder="...describe your problem in details"
                        placeholderTextColor="#aaaaaa"
                        multiline={true}
                        style={styles.description}
                        textAlignVertical="top"
                        // value={description}
                    />
                    <View style={styles.tag_container}>
                        {tagList[0] !== '' &&
                            tagList.map((tag, index) => {
                                return (
                                    <Text key={index} style={styles.tag}>
                                        {tag}
                                    </Text>
                                );
                            })}
                    </View>
                    <TextInput
                        placeholder="Enter Tags: use comma(,) to seperate tags"
                        placeholderTextColor="#aaaaaa"
                        multiline={true}
                        style={styles.tag_input}
                        onChangeText={text => handleTags(text)}
                        value={tagsValue}
                    />
                </View>
                <View>
                    {/* add */}
                    <View></View>
                    {/* preview */}
                    <View></View>
                    {/* media */}
                </View>
                <View style={styles.whitespace}></View>
            </ScrollView>
        </View>
    );
};

export default Post;
