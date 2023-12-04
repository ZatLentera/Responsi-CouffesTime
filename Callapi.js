import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, Linking } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Callapi = () => {
    const jsonUrl = 'https://script.google.com/macros/s/AKfycbxc1t5t80NnjJU3m4Ca7fqKntVOKbRPjAfikWO_JwsEP76hL8MyXrg63FG4cK1a_zBZ/exec';
    const [isLoading, setLoading] = useState(true);
    const [dataUser, setDataUser] = useState({});
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        fetch(jsonUrl)
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                setDataUser(json)
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }
        , []);

    function refreshPage() {
        fetch(jsonUrl)
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                setDataUser(json)
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false)
            );
    }

    return (
        <SafeAreaView>
            {isLoading ? (
                <View>
                    <Text>Loading...</Text>
                </View>
            ) : (
                <View style={styles.backgroundfull}>
                    <Text style={{fontFamily:'cursive', fontSize: 40, color: '#F5F7F8', textAlign: 'center'}}> Couffe's Time</Text>
                    <FlatList
                        data={dataUser}
                        onRefresh={() => { refreshPage() }}
                        refreshing={refresh}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (
                            <View style={styles.card}>
                                <TouchableOpacity onPress={() =>
                                    Linking.openURL('google.navigation:q=' + item.latitude + ',' + item.longitude)} >
                                    <View>
                                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                            <Image src={item.foto} style={{ width: 180, height: 100}} />
                                        </View>
                                        <View>
                                            <Text style={styles.cardtitle}>{item.nama}</Text>
                                            <Text style={styles.fontregular}>Rating: {item.rating}</Text>
                                            <Text style={styles.fontregular}>Kategori: {item.kategori}</Text>
                                            <Text style={styles.fontregular}>Koordinat: {item.latitude + ', ' + item.longitude}</Text>
                                            <Text style={styles.fontregular}>{item.deskripsi}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )}
                    />
                    <View><Text></Text><Text></Text><Text></Text></View>
                </View>
            )}
        </SafeAreaView>

    )
}
export default Callapi
const styles = StyleSheet.create({
    backgroundfull: {
        backgroundColor: '#265073',
    },
    title: {
        paddingVertical: 12,
        backgroundColor: '#333',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    avatar: {
        borderRadius: 100,
        width: 80,
    },
    fontregular: {
        color: '#000000',
    },
    cardtitle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: "#000000",
        textAlign: 'center'
    },
    card: {
        flexDirection: 'row',
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#ECF4D6',
        shadowColor: '#000',
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowOpacity: 5,
        shadowRadius: 1.41,
        elevation: 2,
        marginHorizontal: 20,
        marginVertical: 7,
    },
})
