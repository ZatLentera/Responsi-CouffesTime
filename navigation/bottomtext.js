import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import Portofolio from '../App';
import { WebView } from 'react-native-webview';
import Getjsonfile from '../Getjsonfile';

const Tab = createBottomTabNavigator();
const webmap = require('../peta/map.html')

function HomeScreen() {
    return (
        <ScrollView>
            <Text style={styles.title}>My Maps</Text>
            <View style={styles.listitem}>
                <Image source={require('../peta/Peta_DAS.png')} style={styles.image} />
                <Text style={styles.caption}>Peta Sub DAS Tinalah</Text>
            </View>
            <View style={styles.listitem}>
                <Image source={require('../peta/Peta_DAS.png')} style={styles.image} />
                <Text style={styles.caption}>Peta Sub DAS Tinalah</Text>
            </View>
            <View style={styles.listitem}>
                <Image source={require('../peta/Peta_DAS.png')} style={styles.image} />
                <Text style={styles.caption}>Peta Sub DAS Tinalah</Text>
            </View>
            <View style={styles.listitem}>
                <Image source={require('../peta/Peta_DAS.png')} style={styles.image} />
                <Text style={styles.caption}>Peta Sub DAS Tinalah</Text>
            </View>
        </ScrollView>
    );
}

function MapsScreen() {
    return (
        <WebView
            source={webmap}
        />
    );
}
function ProfilScreen() {
    return (
        <View>
            <Portofolio />
        </View>
    );
}
function MahasiswaScreen() {
    return (
        <Getjsonfile/>
    );
}

function MyTabs() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerShown: false }} >
                <Tab.Screen name="Home" component={HomeScreen}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => (
                            <Fontawesome5 name="home" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen name="Maps" component={MapsScreen}
                    options={{
                        tabBarLabel: 'Maps',
                        tabBarIcon: ({ color, size }) => (
                            <Fontawesome5 name="map-marked-alt" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen name="Profil" component={ProfilScreen}
                    options={{
                        tabBarLabel: 'Profil',
                        tabBarIcon: ({ color, size }) => (
                            <Fontawesome5 name="user-circle" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen name="Mahasiswa" component={MahasiswaScreen}
                    options={{
                        tabBarLabel: 'Mahasiswa',
                        tabBarIcon: ({ color, size }) => (
                            <Fontawesome5 name="users" color={color} size={size} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default MyTabs;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 250,
        resizeMode: 'stretch'
    },
    listitem: {
        padding: 20,
        alignItems: 'center',

    },
    caption: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10
    }
})