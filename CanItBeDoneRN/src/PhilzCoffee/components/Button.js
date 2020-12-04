import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'

const width = (Dimensions.get('window').width - 64) / 2

const Button = ({ label }) => {
    return (
        <TouchableWithoutFeedback>
            <View style={styles.container}>
                <Text style={styles.label}>{label}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default Button

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#432406",
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 27,
        height: 54,
        width
    },
    label: {
        color: 'white',
        fontSize: 16,
        alignSelf: 'center',
        fontWeight:'bold'
    }
})
