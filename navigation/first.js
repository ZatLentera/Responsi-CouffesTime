import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import petalokasiobjek from './petalokasiobjek';
import { Navigation } from '@react-navigation/native';


function on() {
    return (
        <View>
            <Peta />
        </View>
    );
}


function home() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to MyApp</Text>
    
            <TouchableOpacity style={styles.button} onPress={() => Navigation.navigate('petalokasiobjek')}>
                <Text style={styles.buttonText}>Go to Peta Lokasi Objek Screen</Text>
            </TouchableOpacity>
        </View>
    );
}

export default home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
    },
    button: {
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});