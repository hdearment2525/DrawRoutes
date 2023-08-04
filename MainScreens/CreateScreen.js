import React from 'react';
import { Text, View, ImageBackground, StatusBar, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MapView from 'react-native-maps';
export const CreateScreen = () => {

    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.buttonHUB}>
                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Create</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Generate</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.mapHUB}>
                <MapView style={styles.map} initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}/>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E4E2',
        alignItems: 'center',
    },

    buttonHUB: {
        width: '90%',
        height: 150,
        borderWidth: 2,
        borderColor: '#50C878',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,

    },
    buttonArea: {
        width: '100%',
        height: '40%',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        width: 115,
        height: '90%',
        borderRadius: 15,
        borderColor: '#ffaa33',
        backgroundColor: 'rgba(255, 255, 255, 0.5)'
    },
    buttonText: {
        fontSize: 16,
    },
    mapHUB: {
        width: '90%',
        height: 555,
        borderWidth: 2,
        marginVertical: 5,
        borderRadius: 10,
        borderColor: '#ffaa33',
        justifyContent: 'center',
        alignItems: 'center',
    },
    map: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    }

    
});

export default CreateScreen;