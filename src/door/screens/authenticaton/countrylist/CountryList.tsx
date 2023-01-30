import React, {FC, useMemo, useState} from 'react';
import {TextInput, View, Text, FlatList, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {ArrowBackIcon, CountriesData, updateUser} from '../../../';
import styles from './stylesCountryList';

interface interfaceProps {
    show: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
    details: React.Dispatch<React.SetStateAction<string>>;
}

type typeCountriesData = {
    country: string;
    dial_code: string;
};

const AllCountries: FC<{
    countriesData: typeCountriesData[];
    handleSetter: (country: string, dialCode: string) => void;
}> = React.memo(({countriesData, handleSetter}) => {
    return (
        <FlatList
            initialNumToRender={30}
            style={styles.country_container}
            data={countriesData}
            keyExtractor={(item: typeCountriesData) => item.country}
            renderItem={({item}) => (
                <TouchableOpacity
                    style={styles.country}
                    key={item.dial_code}
                    onPress={() => handleSetter(item.country, item.dial_code)}>
                    <Text style={styles.country_name}>
                        {item.country.substring(0, 30)}
                    </Text>
                    <Text style={styles.dial_code}>{item.dial_code}</Text>
                </TouchableOpacity>
            )}
        />
    );
});

const CountryList: FC<interfaceProps> = ({show, details}) => {
    const [showCountryList, setShowCountryList] = show;
    const setWarnMessage = details;

    const dispatch = useDispatch();

    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (query: string) => {
        setSearchQuery(query);
    };

    const handleSetter = (countryName: string, dialCode: string) => {
        dispatch(
            updateUser({countryName: countryName, countryDialCode: dialCode}),
        );
        setWarnMessage('');
        setShowCountryList(!showCountryList);
    };

    const filteredCountries = useMemo(() => {
        return CountriesData.filter(country =>
            country.country.toLowerCase().includes(searchQuery.toLowerCase()),
        );
    }, [searchQuery]);

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <TouchableOpacity
                    onPress={() => setShowCountryList(!showCountryList)}
                    style={styles.title_icon}>
                    <ArrowBackIcon fill={'#000000'} />
                </TouchableOpacity>
                <View style={styles.title_msg_container}>
                    <Text style={styles.title_msg}>Choose a country</Text>
                </View>
            </View>
            <TextInput
                placeholder="Search countries"
                placeholderTextColor="#aaaaaa"
                onChangeText={handleSearch}
                style={styles.searchField}
            />
            <AllCountries
                countriesData={filteredCountries}
                handleSetter={handleSetter}
            />
        </View>
    );
};

export default CountryList;
