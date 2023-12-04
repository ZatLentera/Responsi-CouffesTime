import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import Portofolio from '../App';
import Callapi from '../Callapi';
import { WebView } from 'react-native-webview';

const Tab = createBottomTabNavigator();
const forminput = 'https://zatlentera.github.io/Responsi-PGPBL/';
const mapview = 'https://zatlentera.github.io/Responsi-PGPBL/map.html';


function HomeScreen() {
    return (
        <ScrollView>
            <Image
                source={{ uri: 'https://img1.wsimg.com/isteam/ip/14dcf390-858d-499c-aa8f-b9aa40968d97/cafeportrait.jpg' }}
                style={{ width: '100%', height: '144%', position: 'absolute' }}
            />
            <View style={styles.overlay} />
            <Text style={styles.title}>Couffe's Time</Text>
            <View style={styles.listitem}>
                <Image source={require('../peta/Couffestime.png')} style={styles.symbol} />
                <Text style={styles.caption}>Rekomendasi Cafe Berkualitas Untuk-Mu Si Paling Prioritas</Text>
            </View>
            <View style={styles.listitem}>
                <Text style={{ textAlign: 'justify', color: '#EBF3E8', marginHorizontal: 8, fontFamily:'Sans-serif' }}>          Selamat datang di aplikasi eksplorasi Cafe kami! Kami dengan bangga mempersembahkan pengalaman unik
                    untuk memandu Anda dalam penjelajahan dunia kafe yang penuh cita rasa. Temukan pesona kafe-kafé terbaik di sekitar Anda,
                    dari aroma kopi yang memikat hingga hidangan lezat dan suasana yang mengundang.
                </Text>
            </View>
            <View style={styles.listitem}>
                <Image source={require('../peta/cafeoutdoor.jpg')} style={styles.image} />
                <Text></Text>
                <Text style={{ textAlign: 'justify', color: '#EBF3E8', marginHorizontal: 8 , fontFamily:'Sans-serif'}}>          Dengan fitur rekomendasi kami, Anda dapat menemukan tempat-tempat istimewa yang cocok dengan selera dan preferensi Anda.
                    Apakah Anda mencari Cafe yang tenang untuk bekerja atau tempat yang ramai untuk bersantai bersama teman, kami memiliki pilihan yang sesuai untuk setiap suasana.
                </Text>
            </View>
            <View style={styles.listitem}>
                <Text style={{ textAlign: 'justify', color: '#EBF3E8', marginHorizontal: 8, fontWeight: 'bold', fontSize: 15, textAlign: 'left' , fontFamily:'Sans-serif'}}>Kami menawarkan beberapa keunggulan diantaranya seperti:</Text>
                <View style={{ textAlign: 'justify', color: '#EBF3E8', marginHorizontal: 8, fontFamily:'Sans-serif' }}>
                    <Text style={{ color: '#EBF3E8' }}> 1. Memberikan informasi lokasi</Text>
                    <Text style={{ color: '#EBF3E8' }}> 2. Menyediakan informasi rating</Text>
                    <Text style={{ color: '#EBF3E8' }}> 3. Pengguna dapat berkontribusi</Text>
                    <Text style={{ color: '#EBF3E8' }}> 4. Visualisasi yang menarik</Text>
                    <Text style={{ color: '#EBF3E8' }}> 5. Menyediakan deskripsi singkat hasil penilaian</Text>
                </View>
            </View>
        </ScrollView>
    );
}
function MapsScreen() {
    return (
        <WebView
            source={{ uri: mapview }}
        />
    );
}

function ListDataScreen() {
    return (
        <View>
            <Callapi />
        </View>
    );
}

function AddDataScreen() {
    return (
        <WebView
            source={{ uri: forminput }}
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
                <Tab.Screen name="List Data" component={ListDataScreen}
                    options={{
                        tabBarLabel: 'List Data',
                        tabBarIcon: ({ color, size }) => (
                            <Fontawesome5 name="list-alt" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen name="Add Data" component={AddDataScreen}
                    options={{
                        tabBarLabel: 'Add Data',
                        tabBarIcon: ({ color, size }) => (
                            <Fontawesome5 name="plus-circle" color={color} size={size} />
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
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default MyTabs;

const styles = StyleSheet.create({
    symbol: {
        width: 120,
        height: 180
    },
    image: {
        width: '100%',
        height: 250,
        resizeMode: 'stretch',
        marginHorizontal: 20
    },
    listitem: {
        padding: 20,
        alignItems: 'center',

    },
    caption: {
        fontSize: 25,
        textAlign: 'center',
        color: '#FDFAF6',
        fontFamily: 'cursive'
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
        color: '#FDFAF6',
        fontFamily: 'cursive'
    },
    container: {
        backgroundColor: '#4FC0D0',
        marginHorizontal: 20,
        padding: 20,
        marginTop: 10
    },
    background: {
        backgroundColor: '#265073',
        height: '100%'
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        height: '144%'
    },
})