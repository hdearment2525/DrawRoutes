import React from 'react';
import { Text, View, ImageBackground, Image, StatusBar, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export const FeedItem = () => (
    <View style={styles.feedItem}>
        <View style={styles.walkImageArea}>
        <Image style={styles.image} source={require('drawroutes/assets/map.png')}></Image>

        </View>
        <View style={styles.contentArea}>
            <View style={styles.shapeNameArea}>
                <Text style={styles.shape}>Dinosaur</Text>
            </View>
            <View style={styles.locationArea}>
                <Text style={styles.location}>Denver</Text>
            </View>
            <View style={styles.distanceArea}>
                <Text style={styles.distance}>5.3 Miles</Text>
            </View>
        </View>
    </View>
);

export const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.titleArea}>
                <View style={styles.textArea}>
                    <Text style={styles.titleText}>Draw While You Walk</Text>
                </View>
            </View>

            <ScrollView style={styles.scrollContain}>
                <FeedItem></FeedItem>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E4E2',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    titleArea: {
        width: '99%',
        height: '20%',
        borderRadius: 10,
        borderWidth: 4,
        borderColor: '#cc5500',
        justifyContent: 'center',
        alignItems: 'center',
    },

    textArea: {
        borderWidth: 3,
        width: '50%',
        height: '40%',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#c04000',
    },

    titleText: {
        fontSize: 15,
    },

    scrollContain: {
        borderWidth: 4,
        borderColor: '#ffaa33',
        width: '99%',
        flex: 1,
        borderRadius: 10,
        marginVertical: 5,
        height: '60%',
        
    },

    feedItem: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 100,
        width: '97%',
        borderWidth: 2,
        borderRadius: 10,
        marginVertical: 5,
        alignSelf: 'center',
        borderColor: '#50C878'
    },

    walkImageArea: {
        width: '30%',
        borderWidth: 1,
        height: '90%',
        left: 5,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    contentArea: {
        left: 10,
        borderWidth: 1,
        width: '65%',
        borderRadius: 12,
        height: '90%',
        flexDirection: 'column',
    },
    shapeNameArea: {
        borderWidth: 1,
        height: '27%',
        width: '80%',
        alignSelf: 'center',
        marginVertical: 3,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },

    locationArea: {
        borderWidth: 1,
        height: '27%',
        width: '80%',
        alignSelf: 'center',
        marginVertical: 3,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    distanceArea: {
        borderWidth: 1,
        height: '27%',
        width: '40%',
        alignSelf: 'center',
        marginVertical: 1,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: '100%',
        height: '100%',
        
    }
});

export default HomeScreen;
