import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export const Countnumber = () => {
    //useState untuk menambah value dari nilai deafult variabel misal, default 1 setiap klik button nambah 1 + 1 + 1
  const [number, setNumber] = useState(10)
    return (
    <View>
        <Text style={styles.text}>{number}</Text>
        <Button title="Tambah" onPress={() => setNumber(number +1)}/>
        <Button title="Reset" onPress={() => setNumber(1) } color="red" />
    </View>
  )
}

export default Countnumber

const styles = StyleSheet.create ({
    text: {
        fontSize: 20
    }
})
