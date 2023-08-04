import React from 'react';
import { Text, View, Image, StatusBar, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export const ProfileScreen = ({navigation, user}) => {

    const first = user.firstName;
    const username = user.username;
    
    const handleEdit = () => {
        navigation.navigate('EditProfile', {user});
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.profileHead}>
                <View style={styles.imageContainer}>
                    <Image source={{uri: 'https://www.digitary.net/wp-content/uploads/2021/07/Generic-Profile-Image.png'}} style={{width: 98, height: 98, borderRadius: 50,}} />
                </View>
                <View style={styles.nameHub}>
                    <Text>{first}</Text>
                    <Text>{"530 Miles"}</Text>
                </View>
            </View>
            <View style={styles.profileBody}>
                <TouchableOpacity style={styles.optionContainer} onPress={handleEdit}>
                    <Text>{"Edit"}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    profileHead: {
        width: '100%',
        borderBottomColor: '#50C878',
        height: 200, // increased height
        borderBottomWidth: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly', // added to equally distribute the child elements (image and nameHub)
    },

    imageContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#ffaa33'
    },

    profileBody: {
        width: '95%',
        height: 560,
        alignItems: 'center',
        borderWidth: 1,
        paddingTop: 60,
        borderRadius: 10,
        marginVertical: 35,
        borderColor: '#ffaa33'
    },

    nameHub: {
        borderWidth: 1,
        width: '50%',
        height: '20%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    optionContainer: {
        width: '50%',
        height: '5%',
        borderWidth: 1,
        marginVertical: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    }
});

export default ProfileScreen;
