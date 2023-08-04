import React from 'react';
import { Text, View, ImageBackground, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
export const SearchScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <Text style={{color: '#8b0000', fontSize: 18, paddingRight: 250}}>Search</Text>
                <Icon name="search" size={25} color={'#8b0000'} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    searchContainer: {
        alignSelf: 'center',
        bottom: 300,
        borderWidth: 1,
        width: '90%',
        alignItems: 'center',
        height: '5%',
        borderRadius: 10,
        justifyContent: 'center',
        flexDirection: 'row',
    }
});

export default SearchScreen;
